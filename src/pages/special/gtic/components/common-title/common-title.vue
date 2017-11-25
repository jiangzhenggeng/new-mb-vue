<style lang="scss" scoped="">
  @import "../../../../../style/scss/helpers/functions";

  .common-title__wrap {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #000 url(./../../images/page-bg.png);
    padding: px2rem(30) 0;
    min-width: px2rem(480);

    .common-title__title {
      background: #51BDEC;
      width: px2rem(58);
      height: px2rem(58);
      line-height: px2rem(58);
      span{
        color: #FFF794;
        font-size: px2rem(50);
        transform: scaleX(0.8);
        display: block;
      }
    }
    .common-title__logo {
      margin-top: px2rem(32);
    }
    .common-title__logo-inner {
      line-height: px2rem(80);
      font-size: px2rem(80);
      color: #51BDEC;
      transform: scaleX(0.8);
      letter-spacing: px2rem(5);
    }
    .common-title__desc {
      color: #FFFFFF;
      font-size: px2rem(24);
      margin-top: px2rem(10);
      letter-spacing: px2rem(4);
    }
    .common-title__bottom {
      color: #FFFFFF;
      font-size: px2rem(28);
      margin-top: px2rem(20);
    }
  }
</style>
<template>
  <div class="common-title__wrap">
    <div class="common-title__title"><span>{{ index }}</span></div>
    <div class="common-title__logo">
      <div class="common-title__logo-inner">{{ title }}</div>
      <div class="common-title__desc" v-if="en">{{ en }}</div>
    </div>
    <div class="common-title__bottom">{{ bottom }}</div>
  </div>
</template>
<script>

  export default {
    props: {
      index: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      bottom: {
        type: String,
        required: true
      },
      en: {
        type: String,
        default: ''
      }
    }
  }
</script>