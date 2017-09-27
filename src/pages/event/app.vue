<template>
  <div class="page">
    <loading v-show="show"/>
    <page-header/>
    <div class="content-wrap ft">
      哈哈哈
    </div>
  </div>
</template>

<script>
  import page_header from './../../components/header.vue';
  import * as types from './../../store/types';
  import {mapState} from 'vuex';

  export default {
    data: function () {
      return {};
    },
    computed:{
      ...mapState([
        'show'
      ])
    },
    components: {
      'page-header': page_header
    },
    created: function () {

    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import './../../style/less/base.less';
</style>

<style lang="less" rel="stylesheet/less" scoped>
  @import "./../../style/less/_mixs.less";
</style>
