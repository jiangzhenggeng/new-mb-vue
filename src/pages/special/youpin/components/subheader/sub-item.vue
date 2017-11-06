<template>
  <div class="sub-item k-animate-2">
    <div class="sub-item-logo">
      <div :class="`sub-item-logo-img sub-item-logo-img-${item.icon}`"></div>
    </div>
    <div class="sub-item-title">{{ item.title }}</div>
    <div class="sub-item-desc" v-html="item.desc"></div>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        default: {}
      }
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  @import "../../../../../style/scss/helpers/functions";

  .sub-item {
    width: 50%;
    position: relative;
    margin-top: px2rem(60);
    padding-bottom: px2rem(30);
    &:before {
      position: absolute;
      content: '';
      display: block;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      background: #F66039;
      width: px2rem(20);
      height: px2rem(2);
    }
    &:nth-child(odd):after {
      position: absolute;
      content: '';
      display: block;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      background: #F0F0F0;
      width: px2rem(1);
      height: 100%;
    }
  }
  .sub-item-logo {
    height: px2rem(70);
    .sub-item-logo-img{
      height: 100%;
      background-size: auto px2rem(70);
      background-repeat: no-repeat;
      background-position: center center;
    }
    .sub-item-logo-img-2{
      background-image: url(../../style/images/icon/icon-2.png);
    }
    .sub-item-logo-img-3{
      background-image: url(../../style/images/icon/icon-3.png);
    }
    .sub-item-logo-img-4{
      background-image: url(../../style/images/icon/icon-4.png);
    }
    .sub-item-logo-img-5{
      background-image: url(../../style/images/icon/icon-5.png);
    }
    .sub-item-logo-img-7{
      background-image: url(../../style/images/icon/icon-7.png);
    }
    .sub-item-logo-img-8{
      background-image: url(../../style/images/icon/icon-8.png);
    }
    .sub-item-logo-img-9{
      background-image: url(../../style/images/icon/icon-9.png);
    }
    .sub-item-logo-img-10{
      background-image: url(../../style/images/icon/icon-10.png);
    }
  }
  .sub-item-title {
    color: #000000;
    font-size: px2rem(28);
    line-height: px2rem(40);
    margin-top: px2rem(30);
  }
  .sub-item-desc {
    font-size: px2rem(20);
    color: #808080;
    margin-top: px2rem(15);
    line-height: 1.5;
  }
</style>
