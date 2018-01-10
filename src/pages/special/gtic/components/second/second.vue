<style lang="scss" scoped="">
  @import "../../../../../style/scss/helpers/functions";

  .second__wrap {
    margin-top: px2rem(80);
    font-size: px2rem(24);
    color: #999999;
    /*.second__wrap-text{*/
    /*width: px2rem(230);*/
    /*margin: auto;*/
    /*margin-top: px2rem(30);*/
    /*img{*/
    /*width: 100%;*/
    /*display: block;*/
    /*}*/
    /*}*/

    .second__wrap-list {
      width: px2rem(270);
      margin: auto;
      position: relative;
      text-align: center;
      ul {
        position: relative;

        &:after {
          position: absolute;
          content: '';
          display: block;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: px2rem(2.5);
          height: px2rem(490);
          background: #4D4D4D;
        }
      }
      li {
        position: relative;
        padding-left: px2rem(20);
        margin-bottom: px2rem(40);
        &:after {
          position: absolute;
          content: '';
          display: block;
          top: 50%;
          transform: translateY(-50%);
          left: px2rem(-4);
          width: px2rem(10);
          height: px2rem(10);
          border-radius: 50%;
          background: #999999;
          z-index: 2;
        }

        .subtitle {
          color: #999999;
          font-size: px2rem(30);
          padding: px2rem(10) 0;
        }

        .subtime {
          color: #999999;
          font-size: px2rem(24);
          transform: scaleX(0.75);
        }

        &.on {
          &:after {
            background: #38B0E4;
            box-shadow: 0 0 px2rem(10) 0 #38B0E4;
          }
          .subtitle {
            color: #fff;
          }

          .subtime {
            color: #fff;
          }
        }
      }

    }
  }
</style>
<template>
  <div class="second__wrap">
    <div class="second__wrap-inner">
      <div class="second__wrap-title">
        <common-title
          :index="`02`"
          :title="`Schedule`"
          :bottom="`/ 评选流程 /`"
        />
      </div>
      <div class="second__wrap-text">
        <!--<img src="./img.png" />-->
        <div class="second__wrap-list">
          <ul>
            <li :class="isOn('2017.12.01 00:00:01','2017.12.31 23:59:59')?'on':''">
              <div class="subtitle">报名评选</div>
              <div class="subtime">2017.12.01-2017.12.31</div>
            </li>
            <li :class="isOn('2018.01.02 00:00:01','2018.01.07 23:59:59')?'on':''">
              <div class="subtitle">资料筛选</div>
              <div class="subtime">2018.01.02-2018.01.07</div>
            </li>
            <li :class="isOn('2018.01.10 00:00:01','2018.01.26 23:59:59')?'on':''">
              <div class="subtitle">公众投票</div>
              <div class="subtime">2018.01.10-2018.01.26</div>
            </li>
            <li :class="isOn('2018.01.26 00:00:01','2018.02.09 23:59:59')?'on':''">
              <div class="subtitle">评委评审</div>
              <div class="subtime">2018.01.26-2018.02.09</div>
            </li>
            <li :class="isOn('2018.03.09 00:00:01','2099.03.09 23:59:59')?'on':''">
              <div class="subtitle">颁奖仪式</div>
              <div class="subtime">2018.03.09</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
	import CommonTitle from './../common-title/common-title.vue'

	export default {
		components: {
			CommonTitle
		},
		methods: {
			isOn(starttime, endtime) {
				var now = new Date().getTime()
        if(starttime && endtime){
					var starttime = new Date(starttime).getTime()
					var endtime = new Date(endtime).getTime()
					if (starttime <= now && now <= endtime) {
						return true
					}else{
						return false
          }
        }
				return false
			}
		}
	}
</script>