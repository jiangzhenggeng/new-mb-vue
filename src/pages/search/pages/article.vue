<style lang="less" scoped>
  @import "./item.less";
</style>

<template>
  <div class="search__page">
    <search-input @back="back" @search="search" :keyword="keyword"/>
    <div class="search__result-item-wrap">
      <div class="search__result-item-box">
        <load-async-data
          url="/api/search/index"
          :extData="extData"
          :resultCallback="resultCallback"
          ref="load-data-limit"
        >
          <template slot="slot-data-box" slot-scope="props">
            <ul>
              <item-component v-for="item in props.data" :item="item" :key="item.blogid"/>
            </ul>
          </template>
        </load-async-data>
      </div>
    </div>
  </div>
</template>

<script>
  import ItemComponent from './../components/item-blog.vue'
  import mixins from './mixins'

  export default {
    mixins: [mixins],
    data: function () {
      return {
        type: 2
      }
    },
    components: {
      ItemComponent
    },
    methods: {
      resultCallback (replayData) {
        this.hidePageLoading()
        return {
          ...replayData,
          result: replayData.result.blog
        }
      }
    }
  }
</script>
