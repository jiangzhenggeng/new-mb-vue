<style lang="scss" >
  @import './../../style/scss/app.scss';
  @import './../../style/less/wc-messagebox.less';
  @import './../../style/less/page-toggle-scene.less';

</style>

<style lang="scss" scoped>
  .page {
    background-color: #f2f2f2;
  }
</style>

<template>
  <div class="page">
    <div class="content-wrap">
      <page-header-back title="填写订单" />
      <transition :name="transitionName">
        <keep-alive>
          <router-view class="page__animate-root"></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>


<script>
  import PageHeaderBack from './../../components/header-back.vue'
  import { mapState } from 'vuex'
  import mainMixins from './../mainMixins'

  export default {
    mixins: [mainMixins],
    computed: {
      ...mapState([
        'show'
      ])
    },
    components: {
      PageHeaderBack
    }
  }
</script>





