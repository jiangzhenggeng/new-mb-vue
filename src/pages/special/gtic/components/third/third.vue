<style lang="scss" scoped="">
  @import "../../../../../style/scss/helpers/functions";

  .third__wrap {
    margin-top: px2rem(80);
    font-size: px2rem(24);
    color: #999999;
    .third__wrap-text {
    }
    .third__wrap-item {
      width: px2rem(644);
      margin: auto;
      margin-top: px2rem(5);
      position: relative;
      img {
        width: 100%;
        display: block;
      }
      .btn-fix-bg {
        background: #000;
        color: #fff;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: px2rem(18);
        height: px2rem(50);
        line-height: px2rem(50);
        width: px2rem(150);
        text-align: center;
      }
    }
  }

  .window__wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    .window__inner {
      flex: 1;
      position: relative;
      width: 100%;
    }

    .window__inner {
      background: #404040 url(./bg.png);
      box-shadow: 0 3px 14px 0 rgba(0, 0, 0, 0.50);
      padding: px2rem(45);
    }
    .window__inner-content {
      line-height: px2rem(28);
      font-size: px2rem(20);
      color: #fff;
    }
    .hybtn__wrap {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: px2rem(45);
      .hybtn {
        width: px2rem(120);
        height: px2rem(42);
        line-height: px2rem(42);
        background: #000;
        color: #fff;
        text-align: center;
        font-size: px2rem(24);
        &.apply {
          margin-left: px2rem(50);
          background: #51BDEC;
          color: #000;
        }
      }
    }
  }
</style>
<style lang="scss">
  @import "../../../../../style/scss/helpers/functions";

  .window__inner-content {
    p {
      margin-bottom: px2rem(20);
    }
  }
</style>
<template>
  <div class="third__wrap">
    <div class="third__wrap-inner">
      <div class="third__wrap-title">
        <common-title
          :index="`03`"
          :title="`Awards`"
          :bottom="title"
        />
      </div>
      <div class="third__wrap-text">
        <div v-if="innerDontShow!=4" class="third__wrap-item" @click="showWindow('type1')">
          <img src="./1.svg"/>
          <div class="btn-fix-bg">敬请期待</div>
        </div>
        <div v-if="innerDontShow!=1" class="third__wrap-item" @click="showWindow('type2')">
          <img src="./2.svg"/>
          <div class="btn-fix-bg">投票结束</div>
        </div>
        <div v-if="innerDontShow!=2" class="third__wrap-item" @click="showWindow('type3')">
          <img src="./3.svg"/>
          <div class="btn-fix-bg">投票结束</div>
        </div>
        <div v-if="innerDontShow!=3" class="third__wrap-item" @click="showWindow('type4')">
          <img src="./4.svg"/>
          <div class="btn-fix-bg">投票结束</div>
        </div>
      </div>
    </div>
    <div v-if="show" class="window__wrap">
      <div class="window__inner">
        <div class="window__inner-content" v-html="content"></div>
        <div class="hybtn__wrap">
          <div class="hybtn close" @click="closeWindow">关闭</div>
          <!--<div class="hybtn apply" @click="apply" v-if="url">报名</div>-->
          <template v-if="type">
            <div class="hybtn apply">
              <!--<div @click="toUrl('type.php?type='+type)">投票</div>-->
              <div>投票结束</div>
            </div>
          </template>
          <template v-else>
            <!--<div>投票</div>-->
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
	import $ from 'jquery'
	import CommonTitle from './../common-title/common-title.vue'

	function GetQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]);
		return null;
	}

	const events = ['mousewheel', 'DOMMouseScroll', 'touchmove']
	export default {
		props: {
			refresh: {
				type: Boolean,
				default: false
			},
			title: {
				type: String,
				default: '/ 奖项信息 /'
			},
			dontShow: {
				type: String,
				default: GetQueryString('type')
			}
		},
		data() {
			return {
				type: '',
				show: false,
				contentList: {
					'type1': `<p>“GTIC AWARDS年度大奖，为在2017年度最具变革力、有巨大影响力的公司授予最高荣誉。”</p>
                    <p>奖项介绍<br>
                      -系企业奖项，面向独角兽企业、上市企业、大型公司（未上市）；<br>
                      -将由主办方进行综合评估，最终评选出1家获奖企业；<br>
                      -获奖企业需要出席GTIC AWARDS 2018颁奖仪式。
                    </p>`,
					'type2': `<p>“不要轻视任何一家创业公司。今天的先锋，或许未来就是一只独角兽。”
                    <p>参选条件<br>
                      -参选公司为最近5年创立的人工智能创业公司；<br>
                      -参选公司2017年度在技术创新、业务增长、营收增长、融资等任一方面表现亮眼；<br>
                      -获奖公司需要出席GTIC AWARDS 2018颁奖仪式。
                    </p>
                    <p>评选标准<br>
                      -将评估参选公司在2017年的创新能力、发展速度、影响力和未来价值；<br>
                      -大众投票权重占比30%，评委嘉宾评分权重占70%；<br>
                      -最终评选出10家获奖公司。
                    </p>`,
					'type3': `<p>“唯有创新，才具有长久的生命力。打破常规，敢于创新，当成为本能，砥砺前行。”</p>
                    <p>参选条件<br>
                      -参选产品必须是2017年发布、上市或有重大更新；<br>
                      -参选产品必须是服务于最终消费者；
                    </p>
                    <p>评选标准<br>
                      -将评估参选产品的创新性、行业影响力；<br>
                      -大众投票权重占比30%，评委嘉宾评分权重占70%；<br>
                      -最终评选出10个获奖产品。
                    </p>`,
					'type4': `<p>“把客户需求落地，创造客户认可的价值，是他们一直在追求的目标。”</p>
                    <p>参选条件：<br>
                      -参选方为最近3年发布或上市的行业解决方案、企业级服务或产品；<br>
                      -参选方的服务对象为企业，而非终端消费者；<br>
                      -参选方2017年度在客户价值、创新性、增长速度等任一方面表现亮眼。
                    </p>
                    <p>评选标准：<br>
                      -将评估参选方的创新性、客户价值、成长性、影响力；<br>
                      -大众投票权重占比30%，评委嘉宾评分权重占70%；<br>
                      -最终评选出5个获奖者。
                    </p>`,
				},
				urlList: {
					type1: '',
					//GTIC AWARDS 2018之年度AI先锋奖项报名 http://cn.mikecrm.com/Yc0hq7M
					type2: '',//'http://cn.mikecrm.com/Yc0hq7M',
					//GTIC AWARDS 2018之年度商业应用奖项报名 http://cn.mikecrm.com/dKMOXCe
					type3: '',//'http://cn.mikecrm.com/ebP5noq',
					//GTIC AWARDS 2018之年度创新产品奖项报名 http://cn.mikecrm.com/ebP5noq
					type4: '',//'http://cn.mikecrm.com/dKMOXCe',
				},
				typeIdList: {
					type1: '',
					type2: '1',
					type3: '2',
					type4: '3',
				},
				content: '',
				url: '',
				innerDontShow: this.dontShow
			}
		},
		watch: {
			show(newVal) {
				if (newVal) {
					events.forEach((item) => {
						window.addEventListener(item, this._preventDefault, {
							passive: false
						})
					})
				} else {
					events.forEach((item) => {
						window.removeEventListener(item, this._preventDefault)
					})
				}
			}
		},
		components: {
			CommonTitle
		},
		methods: {
			toUrl(url) {
				window.location = url
				this.show = false
				$(window).scrollTop(0)
			},
			showWindow(key) {
				this.content = this.contentList[key]
				if (this.content) {
					this.show = true
					this.url = this.urlList[key]
				}
				this.type = this.typeIdList[key]
				// console.log(this.type)
			},
			closeWindow() {
				this.show = false
			},
			apply() {
				if (this.url) window.location = this.url
			},
			_preventDefault(e) {
				// e.preventDefault()
				// e.stopPropagation()
				// return false
			}
		}
	}
</script>