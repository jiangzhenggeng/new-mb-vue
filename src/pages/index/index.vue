<style lang="scss">
  $IMAGES_PATH: '../../style/images/';
  @import '../../style/scss/app.scss';
</style>

<template>
  <div>
    <page-header/>
    <home-banner/>
    <home-announcement/>
    <div class="mian-stream">
      <load-data-limit url="/api/article/GetArticleList">
        <template slot="item" slot-scope="props">
          <!--一般大卡片-->
          <item-large
            v-if="props.item.type|largeType"
            :item="props.item"
          />
          <!--话题-->
          <item-topic
            v-else-if="props.item.type==6"
            :item="props.item"
          />
          <!--一般小卡片-->
          <item-card
            v-else
            :item="props.item"
          />
        </template>
      </load-data-limit>
    </div>
  </div>
</template>

<script>
  import pageHeader from '../../components/header.vue'
  import homeBanner from '../../components/homeBanner.vue'
  import homeAnnouncement from '../../components/homeAnnouncement.vue'
  import loadDataLimit from './components/load-data-limit.vue'
  import itemCard from '../../components/card/card.vue'
  import itemLarge from '../../components/card/large.vue'
  import itemTopic from '../../components/card/topic.vue'

  export default {
    data: function () {
      return {}
    },
    components: {
      pageHeader,
      homeBanner,
      homeAnnouncement,
      loadDataLimit,
      itemCard,
      itemLarge,
      itemTopic
    },

    methods: {},
    filters: {
      largeType (type) {
        return type == 1 || type == 2 || type == 3 || type == 4
      }
    }
  }
</script>



