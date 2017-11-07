<style lang="scss">
  @import "../../../style/scss/helpers/functions";
  .order__edit-btn{
    border: px2rem(1) solid #d6d6d6;
    border-radius: px2rem(8);
    color: #333;
    padding: px2rem(10) px2rem(30);
  }
</style>
<template>
  <div class="content-wrap">
    <page-header-back @back="back">
      <div slot="title">订单详情</div>
      <div slot="right">
        <div class="order__edit-btn">修改订单</div>
      </div>
    </page-header-back>
    <div class="order__page-wrap page__body">
      <product-header-car></product-header-car>
      <order-model></order-model>
      <order-info></order-info>
      <pay-type></pay-type>
      <pay-info></pay-info>
    </div>
    <bottom-query></bottom-query>
  </div>
</template>


<script>
  import { mapState, mapActions } from 'vuex'
  import ProductHeaderCar from './components/product.vue'
  import BottomQuery from './components/bottom-query.vue'
  import OrderInfo from './components/order-info.vue'
  import PayType from './components/pay-type/pay-type.vue'
  import OrderModel from './components/order-model.vue'
  import PayInfo from './components/pay-info/index.vue'
  import PageHeaderBack from './../../../components/header-back.vue'
  import mainMixins from './../../mainMixins'

  export default {
    mixins: [mainMixins],
    created () {

    },
    components: {
      ProductHeaderCar,
      BottomQuery,
      OrderInfo,
      PayType,
      OrderModel,
      PayInfo,
      PageHeaderBack
    },
    methods: {
      back () {
        this.updateDirection({
          direction: 'out'
        })
        this.$router.back()
      },
      ...mapActions([
        'updateDirection'
      ])
    }
  }
</script>





