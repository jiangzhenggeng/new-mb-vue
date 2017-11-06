<style lang="scss">
  $IMAGES_PATH : '../style/images/';
  @import './../style/scss/app.scss';
</style>

<template>
  <div class="page">
    <loading v-show="show"/>
    <page-header/>
    <div class="content-wrap ft">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import PageHeader from './../components/header.vue'
  import { mapState } from 'vuex'
  import mainMixins from './mainMixins'

  export default {
    mixins: [mainMixins],
    computed: {
      ...mapState([
        'show'
      ])
    },
    components: {
      PageHeader
    }
  }
</script>



