<template>
  <div ref="announcement-main" class="main announcement-main none">
    <div class="announcement-wrap">
      <ul ref="announcement" id="ajax-loading-announcement-box">
        <li v-for="v in data" v-bind:key="v.eventid">
          <a :href="`/mb/event/index/${v.eventid}.html`" class="announcement-item">
            <span class="announcement-event-name">{{ v.play_name }}</span>
            <span class="username">{{ v.username | filterUsername }}</span>
            {{ v.content }}
          </a>
        </li>
        <li v-for="v in data" v-bind:key="v.eventid">
          <a :href="`/mb/event/index/${v.eventid}.html`" class="announcement-item">
            <span class="announcement-event-name">{{ v.play_name }}</span>
            <span class="username">{{ v.username }}</span>
            {{ v.content }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
	import jQuery from 'jquery';

	export default {
		data: function () {
			return {
				data: []
			}
		},
		components: {},
		created: function () {
			this.getAnnounceData();
		},
		methods: {
			getAnnounceData() {
				jQuery.get('/api/event/getBulletins', replayData => {

					var htmlBox = jQuery(this.$refs['announcement']);
					var wrapMain = jQuery(this.$refs['announcement-main']);

					if (replayData.resultCode == 0) {
						wrapMain.show();
						this.data = replayData.result;

						setTimeout(() => {
							var cellLi = htmlBox.find('li');
							var cellLen = cellLi.length / 2;
							var cellHei = cellLi.first().height();
							var scorllNum = 0;

							var setTimeFn = function () {
								cellLi.removeClass('on').eq(scorllNum).addClass('on');
								htmlBox.animate({
									marginTop: -scorllNum * cellHei
								}, function () {
									if (scorllNum >= cellLen) {
										scorllNum = 0;
										htmlBox.css('margin-top', 0);
									}
									scorllNum++;
								});
								setTimeout(function () {
									setTimeFn();
								}, 4000);
							};
							setTimeFn();
						});
					}
				}, 'json');
			},
		},
		filters: {
			filterUsername(username) {
				username = username || '';
				if (username.length > 7) {
					return username.substr(0, 6) + '…';
				}
				return username;
			}
		}
	}
</script>

<style lang="scss">
  @import "../style/scss/helpers/functions";

  //首页公告
  .announcement-main {
    .announcement-wrap {
      position: relative;
      padding: 0 px2rem(24);
      color: #666666;
      font-size: px2rem(26px);
      height: px2rem(92);
      overflow: hidden;
      background: #f7f7f7;
      padding-left: px2rem(100);
      z-index: 2;
      &:after {
        position: absolute;
        left: px2rem(24);
        top: 50%;
        margin-top: px2rem(-28);
        content: '';
        display: block;
        width: px2rem(52);
        height: px2rem(52);
        background-image: url(../style/images/announcement.png);
        background-size: px2rem(24) auto;
        background-clip: content-box;
        background-repeat: no-repeat;
        background-position: left center;
      }
      &:before {
        position: absolute;
        content: '';
        display: block;
        left: px2rem(74);
        top: 50%;
        margin-top: px2rem(-24);
        width: px2rem(2);
        height: px2rem(48);
        background-color: #D1D1D1;
      }
    }
    li {
      height: px2rem(92);
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-align-items: center;
      align-items: center;
      a {
        word-wrap: break-word;
        word-break: break-all;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        line-height: px2rem(36);
        max-height: px2rem(72);
        position: relative;
        top: px2rem(2);
      }
    }
    .announcement-item {
      color: #999999;
    }
    .announcement-event-name {
      color: #666666;
      margin-right: px2rem(16);
    }
  }
</style>