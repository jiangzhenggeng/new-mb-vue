<template>
  <aside :class="['side-menu',{show}]" id="side-menu">
    <div class="mask" @click="closeMenu"></div>
    <menu ref="menu" class="menu-inner">
      <div class="menu-app-download clear">
        <a href="/mb/app/index.html" class="block">
          <div class="app-download-logo fl">
            <img src="../style/images/menu/app-menue-icon.png">
          </div>
          <div class="app-download-desc">
            <div class="ft14">下载</div>
            <div class="ft16 red">极果APP</div>
          </div>
          <div class="icon icon-app-down-arrow"></div>
        </a>
      </div>
      <div class="swipe">
        <ul>
          <li :class="{'on': curr=='index'}">
            <router-link to="/mb/index/index.html"><i class="icon icon-home"></i>首页</router-link>
          </li>
          <li :class="{'on': curr=='event'}">
            <router-link to="/mb/event/index.html"><i class="icon icon-menu-event"></i>试用</router-link>
          </li>
          <li :class="{'on': curr=='product'}">
            <router-link to="/mb/product/index.html"><i class="icon icon-xinping"></i>新品</router-link>
          </li>
          <li :class="{'on': curr=='rebate'}">
            <router-link to="/mb/rebate/index.html"><i class="icon icon-discount"></i>折扣</router-link>
          </li>
          <li :class="{'on': curr=='list'}">
            <router-link to="/mb/list/index.html"><i class="icon icon-list"></i>清单</router-link>
          </li>
          <li :class="{'on': curr=='article'}">
            <router-link to="/mb/article/index.html"><i class="icon icon-experience"></i>体验</router-link>
          </li>

          <li :class="{'on': curr=='vip'}"><a href="/mb/vip/index.html"><i class="icon icon-uee"></i>体验师</a></li>
          <li :class="{'on': curr=='youpin'}"><a href="/mb/html/youpin.html"><i class="icon icon-youpin"></i>优品</a></li>
          <li :class="{'on': curr=='mall'}"><a href="/mb/mall/index.html"><i class="icon icon-mall"></i>商城</a></li>
          <li :class="{'on': curr=='html'}"><a href="/mb/html/list.html"><i class="icon icon-contact"></i>联系</a></li>
        </ul>
      </div>
    </menu>
  </aside>
</template>

<script>
	export default {
		props: {
			show: {
				type: Boolean,
				default: false
			},
			curr: {
				type: String,
				default: 'index'
			}
		},
		data() {
			return {
				startX: 0,
				endX: 0,
				move: '100%',
			};
		},
		methods: {
			closeMenu() {
				this.$emit('closeMenu');
			}
		}
	}
</script>

<style lang="scss">
  @import "../style/scss/helpers/functions";

  .side-menu {
    z-index: -1;
    font-size: px2rem(32);
    display: none;

    &, .mask {
      transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
      transition-duration: 0.3s;
      transition-property: opacity;
      opacity: 0;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .mask {
      position: absolute;
    }

    .menu-inner {
      width: 50%;
      left: -50%;
      height: 100%;
      position: absolute;
      z-index: 100;
      background-color: #fff;

      transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
      transform: translate3d(0, 0, 0);
      transition-duration: 0.3s;
      transition-property: transform;
      overflow-x: hidden;
      overflow-y: scroll;
    }

    &.show {
      z-index: 99;
      opacity: 1;
      .menu-inner {
        transform: translate3d(100%, 0, 0);
      }
      .mask {
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.7);
      }
    }

    li {
      line-height: px2rem(100);
      border-bottom: px2rem(1) solid #f0f0f0;
      position: relative;
      a {
        color: #cfcfcf;
        display: block;
        position: relative;
        padding-left: px2rem(150);
        .icon {
          position: absolute;
          left: px2rem(90);
          top: 50%;
          margin-top: px2rem(-26);
        }
      }
      &.on a {
        color: #fb3f3d;
      }
      &.on {
        .icon-home:before {
          background-position: px2rem(7px*2) px2rem(-55px*2);
        }
        .icon-menu-event:before {
          background-position: px2rem(-23px*2) px2rem(-55px*2);
        }
        .icon-xinping:before {
          background-position: px2rem(-55px*2) px2rem(-55px*2);
        }
        .icon-discount:before {
          background-position: px2rem(-85px*2) px2rem(-55px*2);
        }
        .icon-list:before {
          background-position: px2rem(-114px*2) px2rem(-55px*2);
        }
        .icon-experience:before {
          background-position: px2rem(-143px*2) px2rem(-55px*2);
        }
        .icon-uee:before {
          background-position: px2rem(-54px*2) px2rem(-272px*2);
        }
        .icon-mall:before {
          background-position: px2rem(-174px*2) px2rem(-55px*2);
        }
        .icon-contact:before {
          background-position: px2rem(-205px*2) px2rem(-55px*2);
        }
        .icon-app-download:before {
          background-position: px2rem(-202px*2) px2rem(-205px*2);
        }
        .icon-youpin:before {
          background-image: url(../style/images/menu/red.png);
        }
      }
    }
  }

  .icon-app-down-arrow {
    position: absolute;
    right: px2rem(10);
    top: 50%;
    margin-top: px2rem(-26);
  }

  .menu-app-download {
    padding: px2rem(30);
    position: relative;

    .app-download-logo {
      width: px2rem(84);
    }
    .app-download-desc {
      margin-left: px2rem(100);
    }
    .app-download-logo img {
      width: 100%;
    }
    & + ul {
      border-top: px2rem(1) solid #f0f0f0;
    }
  }
</style>
