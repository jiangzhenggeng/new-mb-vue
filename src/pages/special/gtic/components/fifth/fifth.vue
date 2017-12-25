<style lang="scss" scoped="">
  @import "../../../../../style/scss/helpers/functions";

  .fifth__wrap {
    margin-top: px2rem(80);
    .fifth__wrap-text {
      margin: auto px2rem(24);
    }
    .fifth__logo-inner {
      display: flex;
      align-items: center;
      justify-content: center;
      height: px2rem(204);
      img {
        height: 100%;
      }
    }
    .logo{
      height: px2rem(130);
      width: 33.333%;
      margin: 0 px2rem(10);
      text-align: center;
      img{
        display: inline-block;
        max-width: 100%;
        vertical-align: middle;
      }
      &.zhidx{
        height: px2rem(100);
      }
      &.jiguo{
        height: px2rem(110);
      }
      &.awe{
        height: px2rem(80);
      }
    }
  }
</style>
<template>
  <div class="fifth__wrap">
    <div class="fifth__wrap-inner">
      <div class="fifth__wrap-title">
        <common-title
          :index="`05`"
          :title="`Host`"
          :bottom="`/ 主办 /`"
        />
      </div>
      <div class="fifth__wrap-text">
        <div class="fifth__logo-inner">
          <div class="logo zhidx"><img src="./logo-1.png"/></div>
          <div class="logo jiguo"><img src="./logo-2.svg"/></div>
          <div class="logo awe"><img src="../../images/AWE.png"/></div>
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
    }
  }
</script>