<template>
  <li class="large event clear">
    <div class="global-padding">
      <a :href="`/mb/event/index/${item.eventid}.html`">
        <div class="stream-box">
          <template v-if="item.isshoufa==1">
            <span class="event-tag shoufa">首发</span>
          </template>
          <template v-else-if="item.isshoufa==2">
            <span class="event-tag tiyanshi">体验师专享</span>
          </template>
          <template v-else-if="item.isshoufa==3">
            <span class="event-tag ev-zhekou">折扣</span>
          </template>
          <template v-else-if="item.isshoufa==5">
            <span class="event-tag tiyanshi">App专享</span>
          </template>
          <div class="stream-img">
            <load-img
              :big-img="`http://s1.jiguo.com/${item.fileid}/640?imageView2/1/w/640/h/320/q/100`"
              :src="`http://s1.jiguo.com/${item.fileid}/640?imageView2/1/w/50/h/60/q/30`"
            />
            <div class="mask-cover"></div>
          </div>
          <div class="stream-bottom">
            <div class="stream-title ft18">{{item.name}}</div>
            <div class="stream-text">
              <span class="ft14"><em class="ft18 colfff mgr10">{{ item.follownum }}</em>人参与</span>
              <span :class="`ft14 fr mgt4 ${item.status.status}`">{{ item.status.title }}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  </li>
</template>

<script>

  import * as types from '@/store/types'
  import loadImg from '../../../components/loadimg.vue'
  import { mapState } from 'vuex'

  export default {
    props: {
      item: {
        type: Object
      }
    },
    data: function () {
      return {}
    },
    computed: {},
    components: {
      loadImg
    },
    created () {
      this.$store.commit(types.PAGE_LOADING_QUERY, {
        show: false
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "./../../../style/less/_mixs.less";
  .mian-stream li.large.event {
    .stream-bottom {
      color: #fff;
    }
    .stream-text{
      color: #ccc;
    }
    .stream-title {
      height: 60px;
      line-height: 60px;
    }
  }
</style>
