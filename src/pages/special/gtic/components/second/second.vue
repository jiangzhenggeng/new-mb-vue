<style lang="scss"  scoped="">
  @import "../../../../../style/scss/helpers/functions";
  .second__wrap{
    margin-top: px2rem(80);
    font-size: px2rem(24);
    color: #999999;
    .second__wrap-text{
      width: px2rem(170);
      margin: auto;
      margin-top: px2rem(30);
      img{
        width: 100%;
        display: block;
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
        <img src="./img.svg" />
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