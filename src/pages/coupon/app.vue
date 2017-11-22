<style lang="scss">
  $IMAGES_PATH: '../../style/images/';
  @import "../../style/scss/app.scss";
  @import './../../style/scss/components/wc-messagebox.scss';
  /*@import './../../style/scss/components/page-toggle-scene.scss';*/

</style>

<style lang="scss" scoped>
  .page {
    background-color: #f2f2f2;
  }
</style>

<style lang="stylus">

</style>

<template>
  <div class="page">
    <router-view class="page__animate-root"></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { mapState } from 'vuex'
  import mainMixins from './../mainMixins'
  import triggerPageMixins from './../triggerPageMixins'

  export default {
    mixins: [mainMixins, triggerPageMixins],

//    data () {
//      return {
//        show: false
//      }
//    },
//    watch: {
//      show () {
//        this.Confirm({
//          props: {
//            type: 'alert'
//          }
//        }).show()
//      }
//    },
//    methods: {
//      toggle () {
//        this.show = !this.show
//      }
//    }
  }
</script>




