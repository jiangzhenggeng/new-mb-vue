<style lang="scss">
  @import "./../../../../../style/scss/helpers/functions";
  .password__steps {
    display: flex;
    .step {
      flex: 1;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: px2rem(2);
        margin-top: px2rem(-1);
        top: px2rem(30);
        background: #dee2e7;
        z-index: 1;
        left: 0;
      }
    }
    .step-num {
      background: #fff;
      width: px2rem(56);
      height: px2rem(56);
      line-height: px2rem(56);
      display: inline-block;
      border-radius: 50%;
      position: relative;
      border: px2rem(2) solid #dee2e7;
      z-index: 2;
      text-align: center;
    }
    .step2 {
      text-align: right;
    }
    .step-name {
      color: #dee2e7;
      margin-top: px2rem(10);
    }
    .step.on {
      &::after {
        background: #747e8b;
      }
      .step-num {
        border-color: #747e8b;
      }
      .step-name {
        color: #747e8b;
      }
    }
  }
</style>
<template>
  <div class="password__steps">
    <div class="step step1" :class="step==1?'on':''">
      <div class="step-num">1</div>
      <div class="step-name">{{ firstText }}</div>
    </div>
    <div class="step step2" :class="step==2?'on':''">
      <div class="step-num">2</div>
      <div class="step-name">{{ lastText }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      step: {
        type: Number,
        default: 1
      },
      firstText: {
        type: String,
        default: '校验手机号'
      },
      lastText: {
        type: String,
        default: '设置密码'
      }
    }
  }
</script>
