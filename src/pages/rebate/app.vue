<template>
  <div class="page">
    <loading v-show="$store.show"/>
    <page-header curr="rebate"/>
    <div class="content-wrap">
      <div class="mian-stream">
        <load-data-limit
          url="/api/article/GetArticleList"
          :cache="listcache"
          :extData="extData"
        >
          <template slot="item" slot-scope="props">
            <small-card :item="props.item" />
          </template>
        </load-data-limit>
      </div>
    </div>
  </div>
</template>

<script>
  import PageHeader from '@/components/header.vue'
  import loadDataLimit from '@/components/loadDataLimit.vue'
  import SmallCard from './../../components/card/card.vue'
  import { mapState } from 'vuex'

  export default {
    data: function () {
      return {
        listcache: process.env.NODE_ENV == 'production' ? true : false,
        extData: {
          type: 2,
        }
      }
    },
    components: {
      PageHeader,
      SmallCard,
      loadDataLimit
    },
  }
</script>

<style lang="scss">
  @import './../../style/scss/app.scss';
</style>

<style lang="scss" scoped>
  @import "./../../style/scss/include.scss";
</style>
