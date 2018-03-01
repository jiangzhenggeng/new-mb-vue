<template>
  <div class="content-wrap">
    <page-header-back>
      <div slot="title">填写订单</div>
    </page-header-back>
    <div class="order__page-wrap page__body">
      <product-header-car></product-header-car>
      <order-model></order-model>
      <order-info></order-info>
      <pay-type></pay-type>
      <pay-info></pay-info>
    </div>
    <bottom-query @submit="submitOrder"></bottom-query>
  </div>
</template>


<script>
  import { mapState } from 'vuex'
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
      submitOrder () {
        this.$router.push({
          path:'/mb/pay/myorder'
        })
      }
    }
  }
</script>





