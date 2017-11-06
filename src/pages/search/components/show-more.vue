<style lang="scss" scoped="true">
  .search-type-more {
    line-height: 100px;
    padding: 0 24px;
    position: relative;
    &:before {
      content: '';
      display: block;
      clear: both;
      height: 1px;
      left: 0px;
      bottom: 0px;
      width: 100%;
      position: absolute;
      background-color: #e6e6e6;
    }
    .block {
      display: flex;
      align-items: center;
    }
    .s-left {
      flex: 1;
    }
    .icon-right-arrow:before {
      background-position: -16px * 2 -149px * 2;
    }
  }
</style>

<template>
  <div class="search-type-more">
    <router-link class="block" :to="_url" v-waves.block="true">
      <div class="s-left">
        {{ desc }} (<font id="seaech-event-num">{{ number }}</font>)
      </div>
      <i class="icon icon-right-arrow"></i>
    </router-link>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    props: {
      url: {
        type: String,
        required: true
      },
      desc: {
        type: String,
        default: '查看更多试用'
      },
      number: {
        type: [Number, String],
        default: 0
      }
    },
    computed: {
      _url () {
        return this.url + '?keyword=' + (this.keyword || '')
      },
      ...mapState({
        keyword: state => state.search.keyword
      })
    }
  }
</script>