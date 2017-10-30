<style lang="less">
  .password__steps {
    display: flex;
    .step {
      flex: 1;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        margin-top: -1px;
        top: 30px;
        background: #dee2e7;
        z-index: 1;
        left: 0;
      }
    }
    .step-num {
      background: #fff;
      width: 56px;
      height: 56px;
      line-height: 56px;
      display: inline-block;
      border-radius: 50%;
      position: relative;
      border: 2px solid #dee2e7;
      z-index: 2;
      text-align: center;
    }
    .step2 {
      text-align: right;
    }
    .step-name {
      color: #dee2e7;
      margin-top: 10px;
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
        default: '修改密码'
      }
    }
  }
</script>
