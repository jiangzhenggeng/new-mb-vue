<style lang="less">
  .user__center{
    font-size: 32px;
  }
  .table-view{
    .table-view-row{
      background-color: #fff;
      position: relative;
      &:after {
        content: '';
        display: block;
        clear: both;
        height: 1px;
        left: 0px;
        width: 100%;
        position: absolute;
        background-color: #e6e6e6;
        bottom: 0px;
      }
    }
    .table-view-inner{
      position: relative;
      padding: 30px 70px 30px 80px;
      font-size: 32px;
      display: block;
      &:before{
        content: '';
        display: block;
        width: 52px;
        height: 52px;
        position: absolute;
        right:10px;
        top: 50%;
        transform: translateY(-50%);
      }
      &:before{
        background-image: url(../../../../style/images/global-icon.png);
        background-size: 500px auto;
        background-clip: content-box;
        background-position: -40px -298px;
      }
      &:active{
        background-color: #f7f7f7;
      }
      em{
        float: right;
      }

      .icon{
        position: absolute;
        left: 24px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  .logout a {
    line-height: 85px;
    background: #fff;
    display: block;
    text-align: center;
  }
</style>
<template>
  <div class="page">
    <loading v-show="show"/>
    <page-header-back @back="back" title="个人中心"/>
    <div class="content-wrap user__center">
      <center-header></center-header>
      <tys-nav></tys-nav>

      <div class="item-view mgt10">
        <ul class="table-view">
          <li class="table-view-row" v-waves.block="true">
            <a class="table-view-inner" href="/mb/news/index.html" data-badge-warp="">
              我的消息
              <i class="icon icon-message"></i>
            </a>
          </li>
          <li class="table-view-row" v-waves.block="true">
            <a class="table-view-inner" href="/mb/user/praise.html">
              我的收藏<em>85</em>
              <i class="icon icon-collect"></i>
            </a>
          </li>
          <li class="table-view-row" v-waves.block="true">
            <a class="table-view-inner" href="/mb/user/coupon.html">
              优惠券<em></em>
              <i class="icon icon-coupon"></i>
            </a>
          </li>
          <li class="table-view-row" v-waves.block="true">
            <a class="table-view-inner" href="/mb/user/article.html">
              我的文章<em></em>
              <i class="icon icon-ceping"></i>
            </a>
          </li>
          <li class="table-view-row" v-waves.block="true">
            <a class="table-view-inner" href="/mb/myset/event.html">
              我的试用<em>29</em>
              <i class="icon icon-event"></i>
            </a>
          </li>
          <li class="table-view-row" v-waves.block="true">
            <a class="table-view-inner" href="/mb/myset/order.html">
              我的订单<em>24</em>
              <i class="icon icon-order"></i>
            </a>
          </li>
          <li class="table-view-row" v-waves.block="true">
            <a class="table-view-inner" href="/mb/mall/mycoins.html">
              我的果币<em>379400</em>
              <i class="icon icon-guobi"></i>
            </a>
          </li>
        </ul>

        <ul class="table-view mgt10">
          <li class="table-view-row" v-waves.block="true">
            <a class="table-view-inner" href="/mb/update/address.html">
              收货地址
              <i class="icon icon-address"></i>
            </a>
          </li>
          <li class="table-view-row" v-waves.block="true">
            <a class="table-view-inner" href="/mb/bind/index.html">
              账号绑定
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
