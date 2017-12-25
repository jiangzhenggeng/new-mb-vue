<template>
  <div class="main-body main" :class="scrollBarFixed ? 'pt70' : ''">
    <div class="home" id="home-box">
      <transition
        appear
        appear-class="t-enter-class"
        appear-active-class="t-enter-active-class">
        <div class="awards-img">
          <img src="../assets/images/cup.png" alt="">
        </div>
      </transition>
      <transition
        appear
        appear-class="m-enter-class"
        appear-active-class="m-enter-active-class">
        <div class="gtic-img t-animate">
          <img src="../assets/images/gtic-logo.png" alt="">
        </div>
      </transition>
      <transition
        appear
        appear-class="b-enter-class"
        appear-active-class="b-enter-active-class">
        <p class="logo-txt b-animate">发现智能变革力量</p>
      </transition>
    </div>
    <div class="introduction part" id="introduction-box">
      <div class="part-number">01</div>
      <div class="part-title">
        <div class="part-title-img">
          <img src="../assets/images/introduction.png" alt="">
        </div>
        <h3>GTIC AWARDS 2018</h3>
        <p>/ 评选介绍 /</p>
      </div>
      <div class="part-body">
        <div class="introduction-detail">
          <p>
            GTIC AWARDS 2018，由智东西联合极果和AWE权威发起。此次年度评选聚焦智能变革力量，着眼产业升级趋势，将对在2017年度有着卓越表现、快速成长、大胆创新、取得商业突破的优秀公司、产品和解决方案进行表彰。</p>
          <p><br>走过2016年的技术普及元年，人工智能在2017年与实体经济快速融合，开始对各个行业进行赋能和变革。不过，这不只是人工智能的冲锋号角，也是国内传统产业升级的大契机。那么，在这一轮智能化浪潮中，谁将是这一年度最具变革性的力量？谁又是过去一年跑的最快的AI先锋？谁的产品在突破常规，引领创新？谁的解决方案又在很好地为客户创造价值呢？
          </p>
          <p><br>2018年3月9日，GTIC 2018全球AI芯片创新峰会将于AWE同期在上海召开。届时，我们将在峰会颁奖仪式上正式公布GTIC AWARDS 2018的获奖名单，并向获奖企业颁奖。<br></p>
        </div>
        <div class="left-line"></div>
        <div class="right-line"></div>
      </div>
    </div>
    <div class="time-line part" id="time-line-box">
      <div class="part-number">02</div>
      <div class="part-title">
        <div class="part-title-img">
          <img src="../assets/images/Schedule.png" alt="">
        </div>
        <p>/ 评选流程 /</p>
      </div>
      <div class="part-body">
        <div class="time-line-list">
          <dl class="on">
            <dt class="title">报名评选</dt>
            <dd class="time">2017.12.1-2017.12.31</dd>
          </dl>
          <dl>
            <dt class="title">资料筛选</dt>
            <dd class="time">2018.1.2-2018.1.7</dd>
          </dl>
          <dl>
            <dt class="title">公众投票</dt>
            <dd class="time">2018.1.8-2018.1.21</dd>
          </dl>
          <dl>
            <dt class="title">评委评审</dt>
            <dd class="time">2018.1.22-2017.2.4</dd>
          </dl>
          <dl>
            <dt class="title">颁奖仪式</dt>
            <dd class="time">2018.3.9</dd>
          </dl>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="awards part" id="awards-box">
      <div class="part-number">03</div>
      <div class="part-title">
        <div class="part-title-img">
          <img src="../assets/images/awards.png" alt="">
        </div>
        <p>/ 奖项信息 /</p>
      </div>
      <div class="part-body">
        <ul class="awards-list">
          <li>
            <div class="shadow">
              <div class="awards-img">
                <img src="../assets/images/awards1.png" alt="">
              </div>
              <div class="awards-name">
                <h3>年度变革力量</h3>
                <p>Global Revolution</p>
              </div>
            </div>
            <div class="awards-detail">
              <p>“GTIC AWARDS年度大奖，为在2017年度最具变革力、有巨大影响力的公司授予最高荣誉。”</p>
              <p><br>奖项介绍</p>
              <p>-系企业奖项，面向独角兽企业、上市企业、大型公司（未上市）；</p>
              <p>-将由主办方进行综合评估，最终评选出1家获奖企业；</p>
              <p>-获奖企业需要出席GTIC AWARDS 2018颁奖仪式。</p>
            </div>
            <a class="icon-add" href="javascript:;"><img src="../assets/images/icon-add.png" alt=""></a>
            <!--<a class="apply-btn closed" href="javascript:;" target="_blank">敬请期待</a>-->
            <a class="apply-btn" href="javascript:;" target="_blank">敬请期待</a>
          </li>
          <li>
            <div class="shadow">
              <div class="awards-img">
                <img src="../assets/images/awards2.png" alt="">
              </div>
              <div class="awards-name">
                <h3>年度AI先锋</h3>
                <p>AI Pioneer</p>
              </div>
            </div>
            <div class="awards-detail">
              <p>“不要轻视任何一家创业公司。今天的先锋，或许未来就是一只独角兽。”</p>
              <p><br>参选条件</p>
              <p>-参选公司为最近5年创立的人工智能创业公司；</p>
              <p>-参选公司2017年度在技术创新、业务增长、营收增长、融资等任一方面表现亮眼；</p>
              <p>-获奖公司需要出席GTIC AWARDS 2018颁奖仪式。</p>
              <p><br>评选标准</p>
              <p>-将评估参选公司在2017年的创新能力、发展速度、影响力和未来价值；</p>
              <p>-大众投票权重占比30%，评委嘉宾评分权重占70%；</p>
              <p>-最终评选出10家获奖公司。</p>
            </div>
            <a class="icon-add" href="javascript:;"><img src="../assets/images/icon-add.png" alt=""></a>
            <a class="apply-btn" href="http://cn.mikecrm.com/Yc0hq7M" target="_blank">报名</a>
          </li>
          <li>
            <div class="shadow">
              <div class="awards-img">
                <img src="../assets/images/awards3.png" alt="">
              </div>
              <div class="awards-name">
                <h3>年度创新产品</h3>
                <p>Innovative Product</p>
              </div>
            </div>
            <div class="awards-detail">
              <p>“唯有创新，才具有长久的生命力。打破常规，敢于创新，当成为本能，砥砺前行。”</p>
              <p><br>参选条件</p>
              <p>-参选产品必须是2017年发布、上市或有重大更新；</p>
              <p>-参选产品必须是服务于最终消费者；</p>
              <p><br>评选标准</p>
              <p>-将评估参选产品的创新性、行业影响力；</p>
              <p>-大众投票权重占比30%，评委嘉宾评分权重占70%；</p>
              <p>-最终评选出10个获奖产品。</p>
            </div>
            <a class="icon-add" href="javascript:;"><img src="../assets/images/icon-add.png" alt=""></a>
            <a class="apply-btn" href="http://cn.mikecrm.com/ebP5noq" target="_blank">报名</a>
          </li>
          <li>
            <div class="shadow">
              <div class="awards-img">
                <img src="../assets/images/awards4.png" alt="">
              </div>
              <div class="awards-name">
                <h3>优秀解决方案</h3>
                <p>Best Solution</p>
              </div>
            </div>
            <div class="awards-detail">
              <p>“把客户需求落地，创造客户认可的价值，是他们一直在追求的目标。”</p>
              <p><br>参选条件</p>
              <p>-参选方为最近3年发布或上市的行业解决方案、企业级服务或产品；</p>
              <p>-参选方的服务对象为企业，而非终端消费者；</p>
              <p>-参选方2017年度在客户价值、创新性、增长速度等任一方面表现亮眼。</p>
              <p><br>评选标准</p>
              <p>-将评估参选方的创新性、客户价值、成长性、影响力；</p>
              <p>-大众投票权重占比30%，评委嘉宾评分权重占70%；</p>
              <p>-最终评选出5个获奖者。</p>
            </div>
            <a class="icon-add" href="javascript:;"><img src="../assets/images/icon-add.png" alt=""></a>
            <a class="apply-btn" href="http://cn.mikecrm.com/dKMOXCe" target="_blank">报名</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="judges part" id="judge-box">
      <div class="part-number">04</div>
      <div class="part-title">
        <div class="part-title-img">
          <img src="../assets/images/judges.png" alt="">
        </div>
        <p>/ 评委嘉宾 /</p>
      </div>
      <div class="part-body">
        <ul class="judges-list">
          <li v-for="item in judgelist">
            <div class="judge-img">
              <img v-lazy="item.img" alt="">
            </div>
            <div class="judge-content">
              <h3 class="judge-name">{{item.name}}</h3>
              <div class="judge-desc">
                <p>{{item.txt1}}</p>
                <p>{{item.txt2}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="host part" id="host-box">
      <div class="part-number">05</div>
      <div class="part-title">
        <div class="part-title-img">
          <img src="../assets/images/About.png" alt="">
        </div>
        <p>/ 主办 /</p>
      </div>
      <div class="part-body">
        <div class="logo-item" style="height: 105px">
          <img src="../assets/images/zhidx.png" alt="">
        </div>
        <div class="logo-item">
          <img src="../assets/images/jiguo.png" alt="">
        </div>
        <div class="logo-item">
          <img src="../../images/AWE.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	import bus from '../assets/js/bus'
	import $ from 'jquery'

	export default {
		data() {
			return {
				scrollBarFixed: false,
				judgesNum: 15,
				judgelist: [
					{
						img: require('../assets/images/judges/judge1.jpg'),
						name: '陈昱',
						txt1: '云启资本',
						txt2: '执行董事'
					},
					{
						img: require('../assets/images/judges/judge2.jpg'),
						name: '龚伦常',
						txt1: '智东西',
						txt2: 'CEO'
					},
					{
						img: require('../assets/images/judges/judge3.jpg'),
						name: '顾旻曼',
						txt1: '真格基金',
						txt2: '董事总经理'
					},
					{
						img: require('../assets/images/judges/judge4.jpg'),
						name: '何建文',
						txt1: '辰韬资本',
						txt2: '管理合伙人'
					},
					{
						img: require('../assets/images/judges/judge5.jpg'),
						name: '贾静',
						txt1: '德联资本',
						txt2: '合伙人'
					},
					{
						img: require('../assets/images/judges/judge6.jpg'),
						name: '刘鹏',
						txt1: '极果',
						txt2: '创始人&CEO'
					},
					{
						img: require('../assets/images/judges/judge7.jpg'),
						name: '满坤',
						txt1: '安创空间合伙人、安创资本管理合伙人',
						txt2: ''
					},
					{
						img: require('../assets/images/judges/judge8.jpg'),
						name: '毛圣博',
						txt1: '熊猫资本',
						txt2: '合伙人'
					},
					{
						img: require('../assets/images/judges/judge9.jpg'),
						name: '孟醒',
						txt1: '顺为资本',
						txt2: '副总裁'
					},
					{
						img: require('../assets/images/judges/judge10.jpg'),
						name: '石东华',
						txt1: '索道投资',
						txt2: '创始合伙人'
					},
					{
						img: require('../../components/fourth/images/013孙玉望-中芯聚望总裁.jpeg'),
						name: '孙玉望',
						txt1: '中芯聚源',
						txt2: '总裁'
					},
					{
						img: require('../assets/images/judges/judge11.jpg'),
						name: '王华东',
						txt1: '经纬创投',
						txt2: '合伙人'
					},
					{
						img: require('../assets/images/judges/judge12.jpg'),
						name: '王晟',
						txt1: '英诺天使基金',
						txt2: '合伙人'
					},
//					{
//						img: require('../assets/images/judges/judge13.jpg'),
//						name: '吴智勇',
//						txt1: '丰厚资本',
//						txt2: '创始合伙人'
//					},
					{
						img: require('../assets/images/judges/judge14.jpg'),
						name: '熊伟铭',
						txt1: '华创资本',
						txt2: '合伙人'
					},
					{
						img: require('../assets/images/judges/judge15.jpg'),
						name: '祝晓成',
						txt1: '臻云创投',
						txt2: '创始合伙人'
					}
				]
			}
		},
		created() {
			this.handleScrollBarFixed()
		},
		mounted() {
		},
		methods: {
			handleScrollBarFixed() {
				bus.$on('scrollTop', (messages) => {
					this.scrollBarFixed = messages.navScrollBarFixed
				})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .pt70 {
    padding-top: 70px;
  }

  .home {
    margin-top: 168px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
    background: url("../assets/images/2018.png") no-repeat center bottom;
    background-size: 568px auto;
    .awards-img {
      width: 162px;
      height: 160px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .gtic-img {
      width: 817px;
      height: 146px;
      margin: 20px 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .logo-txt {
      font-size: 30px;
      line-height: 42px;
      color: #FFF78D;
      text-align: center;
      letter-spacing: 18.13px;
    }
  }

  .part {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 130px;
    .part-number {
      width: 58px;
      height: 58px;
      background-color: #51BDEC;
      color: #FFF794;
      font-size: 45px;
      text-align: center;
      line-height: 58px;
    }
    .part-title {
      margin-top: 32px;
      text-align: center;
      .part-title-img {
        height: 58px;
        img {
          height: 100%;
        }
      }
      h3 {
        font-size: 24px;
        letter-spacing: 6px;
        line-height: 33px;
        color: #fff;
        text-align: center;
        font-weight: normal;
      }
      p {
        font-size: 30px;
        line-height: 42px;
        color: #fff;
        margin-top: 20px;
        text-align: center;
      }
    }
  }

  .part-body {
    margin-top: 61px;
    width: 100%;
  }

  .introduction {
    margin-top: 96px;
    .part-body {
      position: relative;
      box-sizing: border-box;
      width: 386px;
      height: 516px;
      border: 3px solid #4F4F4F;
      padding: 0 25px 29px;
      font-size: 14px;
      line-height: 20px;
      margin-top: -118px;
      border-top: none;
      p {
        text-align: justify;
      }
    }
    .introduction-detail {
      margin-top: 139px;
    }
    .left-line, .right-line {
      width: 16px;
      height: 3px;
      background-color: #4F4F4F;
      position: absolute;
      top: 0;
    }
    .left-line {
      left: 0;
    }
    .right-line {
      right: 0;
    }
  }

  .time-line {
    margin-top: 63px;
    .time-line-list {
      display: flex;
      position: relative;
      justify-content: space-around;
      dl {
        text-align: center;
        &:after {
          content: '';
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin: 20px auto 0;
          background-color: #999999;
          position: relative;
          z-index: 2;
        }
        &.on {
          color: #fff;
          &:after {
            background-color: #fff;
          }
        }
      }
      dt {
        font-size: 24px;
        line-height: 33px;
      }
      dd {
        font-size: 16px;
        line-height: 20px;
      }
      .line {
        width: 863px;
        height: 1px;
        background-color: #4D4D4D;
        position: absolute;
        left: 119px;
        bottom: 3.5px;
      }
    }
  }

  .awards {
    .awards-list {
      width: 103%;
      li {
        width: 520px;
        height: 330px;
        margin: 0 5px 5px 0;
        position: relative;
        overflow: hidden;
        float: left;
        &:hover {
          .shadow, .closed {
            display: none;
          }
        }
      }
    }
    .shadow {
      width: 100%;
      height: 100%;
      background-color: #38B0E4;
      display: flex;
      flex-direction: column;
      align-items: center;
      .awards-img {
        height: 118px;
        margin-top: 59px;
        img {
          height: 100%;
        }
      }
      .awards-name {
        margin-top: 16px;
        color: #000;
        text-align: center;
        h3 {
          font-size: 24px;
          line-height: 33px;
        }
        p {
          font-size: 12px;
          line-height: 17px;
        }
      }
    }
    .awards-detail {
      width: 100%;
      height: 100%;
      background: url("../assets/images/awards-detial-bg.png") no-repeat center center;
      background-size: cover;
      padding: 33px 42px;
      box-sizing: border-box;
      font-size: 12px;
      line-height: 17px;
    }
    .icon-add {
      display: block;
      width: 66px;
      height: 66px;
      position: absolute;
      top: -1px;
      right: -1px;
      img {
        width: 100%;
      }
    }
    .apply-btn {
      width: 100px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      background-color: #000;
      color: #fff;
      position: absolute;
      top: 278px;
      left: 210px;
      &.closed {
        background-color: transparent;
        color: #000;
        font-weight: bold;
      }
    }
  }

  .judges {
    .judges-list {
      padding-left: 30px;
      &:after {
        content: '';
        display: block;
        clear: both;
      }
      li {
        width: 190px;
        float: left;
        margin: 0 10px 20px 0;
      }
      .judge-img {
        width: 100%;
        height: 190px;
        overflow: hidden;
        img {
          height: 100%;
        }
      }
      .judge-content {
        color: #000;
        background-color: #51BDEC;
        height: 111px;
        text-align: center;
        padding-top: 14px;
      }
      .judge-name {
        font-size: 24px;
        line-height: 33px;
      }
      .judge-desc {
        margin-top: 7px;
        p {
          font-size: 12px;
          line-height: 17px;
        }
      }
    }
  }

  .host {
    .part-body {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      .logo-item {
        height: 86px;
        margin-left: 102px;
        img {
          height: 100%;
        }
        &:first-of-type {
          height: 112px;
          margin-left: 0;
        }
        &:last-child{
          height: 92px;
        }
      }
    }
  }

  /*动画*/
  .t-enter-active-class {
    transition: ease-out .5s;
  }

  .t-enter-class {
    transform: translateY(-30px);
  }

  .b-enter-active-class {
    transition: ease-out .5s;
  }

  .b-enter-class {
    transform: translateY(30px);
  }
</style>
