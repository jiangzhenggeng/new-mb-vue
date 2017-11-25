<style lang="scss" scoped="">
  @import "../../../style/scss/helpers/functions";
  .page{
    background:#000 url(./images/page-bg.png);
  }
  .header-nav + .content-wrap{
    padding-top: px2rem(88);
  }
  .content-wrap{
    overflow: hidden;
  }
</style>
<template>
  <div class="page">
    <loading v-show="show"/>
    <page-header class="header-nav"/>
    <div class="content-wrap">
      <page-logo></page-logo>
      <page-first id="introduce"></page-first>
      <page-second id="time-line"></page-second>
      <page-third id="awards"></page-third>
      <page-fourth id="judges"></page-fourth>
      <page-fifth id="host"></page-fifth>
      <page-bottom></page-bottom>
    </div>
    <page-top></page-top>
  </div>
</template>

<script>
  import PageHeader from './components/nav/header.vue'
  import PageTop from './components/scrolltop/page-top.vue'
  import PageLogo from './components/logo/logo.vue'
  import PageFirst from './components/first/first.vue'
  import PageSecond from './components/second/second.vue'
  import PageThird from './components/third/third.vue'
  import PageFourth from './components/fourth/fourth.vue'
  import PageFifth from './components/fifth/fifth.vue'
  import PageBottom from './components/bottom/bottom.vue'
  import { mapState, mapActions } from 'vuex'

  export default {
    data: function () {
      return {}
    },
    computed: {
      ...mapState(['show'])
    },
    components: {
      PageHeader,
      PageTop,
      PageLogo,
      PageFirst,
      PageSecond,
      PageThird,
      PageFourth,
      PageFifth,
      PageBottom
    }
  }
</script>

<style lang="scss">
  $IMAGES_PATH: '../../../style/images/';
  @import './../../../style/scss/app.scss';
</style>
