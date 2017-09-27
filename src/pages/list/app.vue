<template>
  <div class="page">
    <loading v-show="$store.show"/>
    <page-header curr="list"/>
    <div class="content-wrap">
      <div class="mian-stream">
        <load-data-limit
          url="/api/article/GetArticleList"
          :cache="listcache"
          :extData="extData"
        >
          <template slot="item" scope="props">
            <larg-card :item="props.item" :tag="false" />
          </template>
        </load-data-limit>
      </div>
    </div>
  </div>
</template>

<script>
  import PageHeader from '@/components/header.vue'
  import loadDataLimit from '@/components/loadDataLimit.vue'
  import LargCard from './../../components/card/large.vue'
  import { mapState } from 'vuex'

  export default {
    data: function () {
      return {
        listcache: process.env.NODE_ENV == 'production' ? true : false,
        extData: {
          type: 3,
        }
      }
    },
    components: {
      PageHeader,
      LargCard,
      loadDataLimit
    },
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import './../../style/less/base.less';
</style>

<style lang="less" rel="stylesheet/less" scoped>
  @import "./../../style/less/_mixs.less";
</style>
