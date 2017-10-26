<style lang="less" scoped>

  .search-type-title {
    line-height: 88px;
    padding: 0 24px;
    font-size: 34px;
  }

  .search__result-item-box {
    background-color: #fafafa;
  }

  .searh__loading {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<template>
  <div class="search__page">
    <search-input @search="search" />
    <template v-if="!searching">
      <div v-show="resultNumber">
        <div class="search__result-item-wrap">
          <div class="search-type-title">试用</div>
          <div class="search__result-item-box">
            <ul>
              <item-event v-for="item in event" :item="item" :key="item.eventid"/>
            </ul>
            <show-more :number="result.event_num" desc="查看更多试用" url="/mb/search/event.html"/>
          </div>
        </div>
        <div class="search__result-item-wrap">
          <div class="search-type-title">文章</div>
          <div class="search__result-item-box">
            <ul class="search__result-item-box">
              <item-blog v-for="item in blog" :item="item" :key="item.blogid"/>
            </ul>
            <show-more :number="result.blog_num" desc="查看更多文章" url="/mb/search/article.html"/>
          </div>
        </div>
      </div>
      <div v-show="!resultNumber">
        <div class="mgt15 mgb15 tc ft16 gray no-search-data">
          <p>你想要找什么</p>
        </div>
      </div>
    </template>
    <div class="searh__loading" v-else :style="`height:${height}px`">
      <img src="../../../style/images/page_loading.svg"/>
    </div>
  </div>
</template>

<script>
  import SearchInput from './../bases/search-input.vue'
  import ItemEvent from './../components/item-event.vue'
  import ItemBlog from './../components/item-blog.vue'
  import ShowMore from './../components/show-more.vue'
  import { mapState, mapActions } from 'vuex'
  import $ from 'jquery'

  export default {
    data: function () {
      return {
        result: {},
        height: $(window).height() - 104,
        searching: false
      }
    },
    created () {
      this.search()
    },
    computed: {
      resultNumber () {
        return this.event.length + this.blog.length
      },
      event () {
        return this.result.event || []
      },
      blog () {
        return this.result.blog || []
      },
      ...mapState({
        show: state => state.show
      })
    },
    components: {
      ItemEvent,
      ShowMore,
      ItemBlog,
      SearchInput
    },
    methods: {
      search (keyword) {
        this.searching = true
        $.get('/api/search/index', {
          keyword: (keyword || '').replace(/^\s+|\s+$/g, '')
        }, replayData => {
          if (replayData.resultCode != 0) {
            this.$toast(replayData.errorMsg || '加载数据错误')
            return
          }
          this.result = replayData.result
        }, 'json').then(() => {
          //关闭 搜索 loading
          this.searching = false
          this.hidePageLoading()
        })
      },
      ...mapActions(['hidePageLoading'])
    }
  }
</script>
