<template>
  <li class="large event clear" v-waves.block="true">
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
            <img
              v-lazy="`http://s1.jiguo.com/${item.fileid}/640?imagediv2/1/w/640/h/320/q/100`"
              :src="`http://s1.jiguo.com/${item.fileid}/640?imagediv2/1/w/60/h/30/q/30`"
            />
            <div class="mask-cover"></div>
          </div>
          <template v-if="item.is_reserve">
            <div class="stream-bottom event-reserve">
              <div class="stream-title ft18">{{item.name}}</div>
              <div class="stream-text">
                <span class="ft14"><em class="ft18 colfff mgr5">{{ item.reserve_num }}</em>人已预约</span>
                <div class="flex center">
                  <div v-if="item.status && item.status.status_title">{{item.status.status_title}}</div>
                  <div class="subscribe mgl10">
                    <div class="subscribe-btn flex center ft12">立即预约</div>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="stream-bottom">
              <div class="stream-title ft18">{{item.name}}</div>
              <div class="stream-text">
                <span class="ft14"><em class="ft18 colfff mgr10">{{ item.follownum }}</em>人参与</span>
                <span :class="`ft14 fr mgt4 ${item.status.status}`">{{ item.status.title }}</span>
              </div>
            </div>
          </template>
        </div>
      </a>
    </div>
  </li>
</template>

<script>

	import * as types from '@/store/types'
	import {mapState} from 'vuex'

	export default {
		props: {
			item: {
				type: Object
			}
		},
		data: function () {
			return {}
		},
		created() {
			this.$store.commit(types.PAGE_LOADING_QUERY, {
				show: false
			})
		}
	}
</script>

<style lang="scss" scoped>
  @import './../../../style/scss/helpers/functions';

  .mian-stream li.large.event {
    .stream-bottom {
      color: #fff;
    }
    .stream-text {
      color: #ccc;
    }
    .stream-title {
      height: px2rem(60);
      line-height: px2rem(60);
    }
  }
</style>
