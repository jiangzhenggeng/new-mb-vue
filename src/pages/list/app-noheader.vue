<template>
  <div class="page">
    <loading v-show="$store.show"/>
    <div class="content-wrap">
      <div class="mian-stream">
        <load-data-limit
          url="/api/article/GetArticleList"
          :cache="listcache"
          :extData="extData"
        >
          <template slot="item" slot-scope="props">
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
    methods:{
      async waite(){
        await new Promise((a,b)=>{

        })
      }
    }
  }
</script>

<style lang="scss">
  $IMAGES_PATH : '../../style/images/';
  @import './../../style/scss/app.scss';
</style>
