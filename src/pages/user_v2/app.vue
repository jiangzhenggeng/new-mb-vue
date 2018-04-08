<style lang="scss">
  $IMAGES_PATH: '../../style/images/';
  @import "../../style/scss/app.scss";
  @import './../../style/scss/components/wc-messagebox.scss';
</style>

<style lang="scss" scoped>
  .page {
    background-color: #f2f2f2;
  }
</style>

<template>
  <div class="page">
    <keep-alive>
      <router-view class="page__animate-root"></router-view>
    </keep-alive>
  </div>
</template>

<script>
	export default {}
</script>




