<style lang="scss" >
  @import "./../../style/table-view.less";
</style>
<style lang="scss" scoped>
  .table-view .table-view-cell-title {
    width: 160px;
  }
  .user__center {
    font-size: 32px;
  }

  .logout a {
    line-height: 85px;
    background: #fff;
    display: block;
    text-align: center;
  }
</style>
<template>
  <div class="content-wrap">
    <loading v-if="show"/>
    <page-header-back @back="back" title="个人中心"/>
    <div class="user__center">
      <center-header></center-header>
      <tys-nav></tys-nav>

      <div class="item-view mgt10">
        <ul class="table-view">
          <li class="table-view-row" v-waves.block="true">
            <a class="table-view-inner" href="/mb/news/index.html" data-badge-warp="">
              <div class="table-view-cell-title">我的消息</div>
              <div class="table-view-cell-value">34</div>
              <i class="icon icon-message"></i>
            </a>
          </li>
          <li class="table-view-row" v-waves.block="true">
            <a class="table-view-inner" href="/mb/user/praise.html">
              <div class="table-view-cell-title">我的收藏</div>
              <div class="table-view-cell-value">85</div>
              <i class="icon icon-collect"></i>
            </a>
          </li>
          <li class="table-view-row" v-waves.block="true">
            <a class="table-view-inner" href="/mb/user/coupon.html">
              <div class="table-view-cell-title">优惠券</div>
              <div class="table-view-cell-value">34</div>
              <i class="icon icon-coupon"></i>
            </a>
          </li>
          <li class="table-view-row" v-waves.block="true">
            <a class="table-view-inner" href="/mb/user/article.html">
              <div class="table-view-cell-title">我的文章</div>
              <div class="table-view-cell-value">32</div>
              <i class="icon icon-ceping"></i>
            </a>
          </li>
          <li class="table-view-row" v-waves.block="true">
            <a class="table-view-inner" href="/mb/myset/event.html">
              <div class="table-view-cell-title">我的试用</div>
              <div class="table-view-cell-value">29</div>
              <i class="icon icon-event"></i>
            </a>
          </li>
          <li class="table-view-row" v-waves.block="true">
            <a class="table-view-inner" href="/mb/myset/order.html">
              <div class="table-view-cell-title">我的订单</div>
              <div class="table-view-cell-value">24</div>
              <i class="icon icon-order"></i>
            </a>
          </li>
          <li class="table-view-row" v-waves.block="true">
            <a class="table-view-inner" href="/mb/mall/mycoins.html">
              <div class="table-view-cell-title">我的果币</div>
              <div class="table-view-cell-value">379400</div>
              <i class="icon icon-guobi"></i>
            </a>
          </li>
        </ul>

        <ul class="table-view mgt10">
          <li class="table-view-row" v-waves.block="true">
            <a class="table-view-inner" href="/mb/update/address.html">
              <div class="table-view-cell-title">收货地址</div>
              <i class="icon icon-address"></i>
            </a>
          </li>
          <li class="table-view-row" v-waves.block="true">
            <a class="table-view-inner" href="/mb/bind/index.html">
              <div class="table-view-cell-title">账号绑定</div>
              <i class="icon icon-bind"></i>
            </a>
          </li>
        </ul>

        <div class="logout mgt15 mgb15" v-waves.block="true">
          <a href="/mb/user/loginout.html" class="block red ft14 tc">退出登录</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import PageHeaderBack from '@/components/header-back.vue'
  import TysNav from './components/tys-nav.vue'
  import CenterHeader from './components/center-herder.vue'

  export default {
    created () {

    },
    mounted () {
      this.hidePageLoading()
    },
    computed: {
      ...mapState({
        show: state => state.show,
      })
    },
    components: {
      PageHeaderBack,
      TysNav,
      CenterHeader
    },
    methods: {
      back () {
        window.location = '/'
      },
      ...mapActions(['hidePageLoading'])
    }
  }
</script>
