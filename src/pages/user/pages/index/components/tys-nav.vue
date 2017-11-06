<style lang="scss">
  @import "./../../../../../style/scss/helpers/functions";
  .user__tys-bar {
    background-color: #fd8434;
    font-size: px2rem(28);
    line-height: px2rem(80);
    height: px2rem(80);
    padding: 0 px2rem(24);
    position: relative;
    .user__tys-inner {
      display: flex;
      color: #fff;
      align-items: center;
      justify-content: space-between;
    }
    .icon-right-arrow {
      position: relative;
      left: px2rem(15);
    }
    .tys-text {
      flex: 1;
    }
  }

  .user__tys-modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 6;
    background-color: rgba(0, 0, 0, 0.6);
    .user__tys-modal-inner{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      width: 86%;
      background-color: #fff;
    }
    .user__tys-modal-body {
      text-align: center;
      position: relative;
      padding: px2rem(50) px2rem(24);
    }
    .user__tys-modal-icon {
      height: px2rem(64);
      width: px2rem(64);
      margin: auto;
      img {
        width: 100%;
      }
    }
    .user__tys-modal-t1{
      font-size: px2rem(28);
      margin: px2rem(24) 0 px2rem(50) 0;
      color: #808080;
    }
    .user__tys-modal-title{
      position: absolute;
      top: px2rem(-24);
      background: #fff;
      left: 50%;
      transform: translateX(-50%);
      padding: 0 px2rem(50);
    }
    .user__tys-modal-box{
      position: relative;
      padding: px2rem(50);
      border: px2rem(2) solid #d2d2d2;
      text-align: center;
      color: #808080;
      font-size: px2rem(28);
      line-height: px2rem(45);
    }
    .user__tys-modal-btn{
      height: px2rem(100);
      line-height: px2rem(100);
      text-align: center;
      background-color: #f3f3f3;
      color: #424242;
      user-select: none;
      &:active{
        background-color: #f3f3f3 - 20%;
        color: #424242 - 20%;
      }
    }
  }

  .user__tys-show-modal-enter-active, .user__tys-show-modal-leave-active {
    transition: all .3s;
  }

  .user__tys-show-modal-enter, .user__tys-show-modal-leave-active {
    opacity: 0;
    transform: scale(1.5);
  }
</style>
<template>
  <div class="user__tys-wrap">
    <div class="user__tys-bar" @click.stop="open" v-waves.block="true">
      <a class="user__tys-inner" href="javascript:;">
        <i class="icon icon-tys"></i>
        <div class="tys-text">申请成为体验师</div>
        <i class="icon icon-right-arrow"></i>
      </a>
    </div>
    <transition name="user__tys-show-modal">
      <div v-if="show" class="user__tys-modal">
        <div class="user__tys-modal-inner">
          <div class="user__tys-modal-body">
            <div class="user__tys-modal-icon">
              <img src="./icon/wrong.png"/>
            </div>
            <div class="user__tys-modal-t1">
              <div>手机端暂不支持申请，</div>
              <div>请用电脑打开极果网在体验师中心申请</div>
            </div>
            <div class="user__tys-modal-box">
              <div class="user__tys-modal-title">体验师福利</div>
              <div>
                1.获得体验师专属标签；<br>
                2.优先获得试用资格；<br>
                3.体验师专享试用资格；<br>
                4.优质内容及个人品牌推广；<br>
                5.全年获得相应额度试用机会；<br>
                6.VIP客服专属服务
              </div>
            </div>
          </div>
          <div class="user__tys-modal-btn" @click="close" v-waves.block="true">知道了</div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        show: false
      }
    },
    methods: {
      open () {
        setTimeout(()=>{
          this.show = true
        },30)
      },
      close () {
        setTimeout(()=>{
          this.show = false
        },30)
      }
    }
  }
</script>








