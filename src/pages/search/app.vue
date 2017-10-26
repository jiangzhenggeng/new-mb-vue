<style lang="less" rel="stylesheet/less">
  @import './../../style/less/base.less';
  @import './../../style/less/wc-messagebox.less';
  /*v-enter: 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。*/
  /*v-enter-active: 定义进入过渡的结束状态。在元素被插入时生效，在 transition/animation 完成之后移除。*/
  /*v-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。*/
  /*v-leave-active: 定义离开过渡的结束状态。在离开过渡被触发时生效，在 transition/animation 完成之后移除。*/
  .router-view-enter-active, .router-view-leave-active {
    transition: opacity .3s
  }
  .router-view-enter, .router-view-leave-active {
    opacity: 0
  }
</style>

<style lang="less" scoped>
  .page {
    background-color: #f2f2f2;
  }
</style>

<template>
  <div class="page">
    <loading v-show="show"/>
    <div class="content-wrap">
      <transition name="router-view">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState({
        show: state => state.show,
      })
    }
  }
</script>
