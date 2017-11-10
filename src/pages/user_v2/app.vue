<style lang="scss">
  $IMAGES_PATH: '../../style/images/';
  @import "../../style/scss/app.scss";
  @import './../../style/scss/components/wc-messagebox.scss';
  @import './../../style/scss/components/page-toggle-scene.scss';

</style>

<style lang="scss" scoped>
  .page {
    background-color: #f2f2f2;
  }
</style>

<template>
  <div class="page">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="page__animate-root"></router-view>
      </keep-alive>
    </transition>
    <!--<div @click="toggle">切换</div>-->
  </div>
</template>

<script>
  import Vue from 'vue'
  import mainMixins from './../mainMixins'

  export default {
    mixins: [mainMixins],
//    data () {
//      return {
//        show: false
//      }
//    },
//    watch: {
//      show () {
//        this.Confirm().show()
//      }
//    },
//    methods: {
//      toggle () {
//        this.show = !this.show
//      }
//    }
  }
</script>




