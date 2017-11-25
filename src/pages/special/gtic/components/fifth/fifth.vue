<style lang="scss" scoped="">
  @import "../../../../../style/scss/helpers/functions";

  .fifth__wrap {
    margin-top: px2rem(80);
    .fifth__wrap-text {
      margin: auto;

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
  }
</style>
<template>
  <div class="fifth__wrap">
    <div class="fifth__wrap-inner">
      <div class="fifth__wrap-title">
        <common-title
          :index="`05`"
          :title="`Host`"
          :bottom="`/ 主办方 /`"
        />
      </div>
      <div class="fifth__wrap-text">
        <div class="fifth__logo-inner">
          <div class="mgr20"><img src="./logo-1.svg"/></div>
          <div><img src="./logo-2.svg"/></div>
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