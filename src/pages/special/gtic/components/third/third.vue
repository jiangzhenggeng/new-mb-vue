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
      img {
        width: 100%;
        display: block;
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
    }
    .hybtn {
      position: absolute;
      width: 50%;
      height: px2rem(120);
      bottom: 0;
      left: 0;
      text-indent: -999999px;
      &.apply {
        left: auto;
        right: 0;
      }
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
          :bottom="`/ 奖项设置 /`"
        />
      </div>
      <div class="third__wrap-text">
        <div class="third__wrap-item" @click="showWindow">
          <img src="./1.svg"/>
        </div>
        <div class="third__wrap-item" @click="showWindow">
          <img src="./2.svg"/>
        </div>
        <div class="third__wrap-item" @click="showWindow">
          <img src="./3.svg"/>
        </div>
        <div class="third__wrap-item" @click="showWindow">
          <img src="./4.svg"/>
        </div>
      </div>
    </div>
    <div v-if="show" class="window__wrap">
      <div class="window__inner">
        <img src="./bg.svg"/>
        <div class="hybtn apply" @click="apply">报名</div>
        <div class="hybtn close" @click="closeWindow">关闭</div>
      </div>
    </div>
  </div>
</template>
<script>
  import CommonTitle from './../common-title/common-title.vue'

  const events = ['mousewheel', 'DOMMouseScroll', 'touchmove']
  export default {
    data () {
      return {
        show: false
      }
    },
    watch: {
      show (newVal) {
        if (newVal) {
          events.forEach((item) => {
            window.addEventListener(item, this._preventDefault, {passive: false})
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
      showWindow () {
        this.show = true
      },
      closeWindow () {
        this.show = false
      },
      apply () {

      },
      _preventDefault (e) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
    }
  }
</script>