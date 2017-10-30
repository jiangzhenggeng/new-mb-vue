<style lang="less">
  @import './../../style/less/base.less';
  @import './../../style/less/wc-messagebox.less';

  .router-view-enter-active, .router-view-leave-active {
    transition: opacity .3s
  }

  .router-view-enter, .router-view-leave-active {
    opacity: 0;
    position: absolute;
    width: 100%;
    min-height: 100%;
  }

</style>

<style lang="less" scoped>
  .page {
    background-color: #f2f2f2;
  }
</style>

<template>
  <div class="page">
    <div class="content-wrap">
      <transition name="router-view">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>
