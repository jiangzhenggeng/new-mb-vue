<template>
  <div class="page">
    <loading v-show="$store.show"/>
    <page-header curr="article"/>
    <div class="content-wrap">
      <div class="mian-stream">
        <load-data-limit
          url="/api/article/GetBlogLists"
          :cache="listcache"
          :extData="extData"
        >
          <template slot="item" scope="props">
            <larg-card
              :item="props.item"
              :tag="false"
              :productName="true"
            />
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
          type: 4,
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
