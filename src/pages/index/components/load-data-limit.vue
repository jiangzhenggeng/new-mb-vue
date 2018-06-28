<template>
  <div class="load-data-limit-wrap">
    <div class="load-data-limit-body">
      <slot :data="item_data"/>
    </div>
    <div
      :ref="`load-data-limit-flage`"
      class="load-data-limit-flage">
      <slot name="loading">
        <loading-block/>
      </slot>
    </div>
  </div>
</template>

<script>

  import $ from 'jquery'
  import throttle from '../../../tools/throttle'
  import md5 from 'md5'
  import sessionStorage from 'sessionstorage'
  import loadingBlock from './loading-block'

  export default {
    props: {
      cache: {
        type: Boolean,
        default: process.env.NODE_ENV == 'production' ? true : false
      },
      url: {
        type: String
      },
      size: {
        type: Number,
        default: 10
      },
      extData: {
        type: Object,
        default () {
          return {
            sys: 'mb'
          }
        }
      },
      resultCallback: {
        type: Function,
        default (replayData) {
          return replayData
        }
      }
    },
    components: {
      loadingBlock
    },
    data () {
      return {
        new_limit: this.limit,
        item_data: [],

        loading: false,
        nodata: false,
        nomore: false,

        timer: null,
        jqueryLoader: null,
        _cacheKey_: window.location.href,
        _cacheData_: ''
      }
    },
    computed: {
      cache_key () {
        return md5(window.location.href)
      },
      limit_flage () {
        return $(this.$refs['load-data-limit-flage'] || null)
      },
      window_height () {
        return $(window).height()
      },
      fixedload () {
        return 0
      },
    },
    mounted () {

      let cache_data = sessionStorage.getItem(this.cache_key)
      if (!this.cache || !cache_data) {
        sessionStorage.removeItem(this.cache_key)
        this.getLoadingItemData()
      } else {
        this._cacheData_ = cache_data

        this.new_limit = cache_data.limit || this.new_limit
        this.item_data = cache_data.data || this.item_data
        this.loading = cache_data.loading || this.loading
        this.nodata = cache_data.nodata || this.nodata
        this.nomore = cache_data.nomore || this.nomore
      }

      let throttleDeFn = throttle(this.getLoadingItemData.bind(this), 320)

      $(window).off('scroll.home').on('scroll.home', throttleDeFn)

    },
    methods: {
      getLoadingItemData () {

        if (
          this.nomore ||//没有更多数据
          this.loading //正在加载中
        ) {
          return
        }

        let scrollTop = $(window).scrollTop()
        let _top = this.window_height + scrollTop + this.limit_flage.height() + this.fixedload
        if (
          this.limit_flage.length &&
          _top < this.limit_flage.offset().top
        ) {
          return
        }
        this.loading = true
        var l_timer = setTimeout(() => {
          this.loading = false
          this.jqueryLoader && this.jqueryLoader.abort()
        }, 10000)

        this.jqueryLoader = $.get(this.url, $.extend(true, this.extData, {
          limit: this.new_limit,
          size: this.size
        }), replayDate => {
          replayDate = this.resultCallback(replayDate)
          this.loading = false
          clearTimeout(l_timer)

          if (replayDate.resultCode == 0) {

            replayDate.result = replayDate.result || []
            //没有数据
            if (!this.item_data.length && !replayDate.result.length) {
              this.nodata = true
            }
            if (replayDate.result.length < this.size) {
              this.nomore = true
            }

            this.new_limit = replayDate.limit
            this.item_data = this.item_data.concat(replayDate.result)

            //缓存数据
            this._cacheData_ = {
              limit: this.new_limit,
              data: this.item_data,
              loading: this.loading,
              nodata: this.nodata,
              nomore: this.nomore,
            }
            sessionStorage.setItem(this.cache_key, this._cacheData_)

            $(window).trigger('scroll')
          } else {

          }
        }, 'json')
      },
      refresh () {
        this.jqueryLoader.abort()
        sessionStorage.delete(this._cacheKey_)
        this.timer && clearTimeout(this.timer)
        this.new_limit = ''
        this.item_data = []
        this.nomore = false
        this.loading = false
        this.nodata = false
        this._cacheData_ = ''
        this.item_data = []
      }
    }
  }
</script>


<style lang="scss">
  @import "../../../style/scss/helpers/functions";

  .no-data {
    background-color: #f2f2f2;
  }

  .loading-more-flage {
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    > * {
      flex: 1;
      height: 100%;
    }
  }
</style>






