<template>
  <div class="page">
    <loading v-show="$store.show"/>
    <page-header curr="event"/>
    <div class="content-wrap">
      <div class="mian-stream">
        <load-data-limit url="/api/event/mbevent" :cache="listcache">
          <template slot="item" slot-scope="props">
            <list-card :item="props.item"/>
          </template>
        </load-data-limit>
      </div>
    </div>
  </div>
</template>

<script>
  import PageHeader from '@/components/header.vue'
  import loadDataLimit from '@/components/loadDataLimit.vue'
  import ListCard from './components/list-card.vue'
  import { mapState } from 'vuex'

  export default {
    data: function () {
      return {
        listcache:process.env.NODE_ENV=='production'?true:false
      }
    },
    components: {
      PageHeader,
      ListCard,
      loadDataLimit
    },
  }
</script>

<style lang="scss">
  $IMAGES_PATH : '../../style/images/';
  @import './../../style/scss/app.scss';
</style>
