<style lang="scss">
  $IMAGES_PATH : '../../style/images/';
  @import "../../style/scss/app.scss";
  @import './../../style/scss/components/wc-messagebox.scss';
  @import './../../style/scss/components/page-toggle-scene.scss';
</style>

<style lang="less" scoped>
  .page {
    background-color: #f2f2f2;
  }
</style>

<template>
  <div class="page">
    <div class="content-wrap">
      <transition :name="transitionName">
        <keep-alive>
          <router-view class="page__animate-root"></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
  import mainMixins from './../mainMixins'

  export default {
    mixins: [mainMixins],
  }
</script>




