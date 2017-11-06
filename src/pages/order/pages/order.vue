

<template>
  <div class="order__page-wrap">
    <product-header-car></product-header-car>
    <order-model></order-model>
    <order-info></order-info>
    <pay-type></pay-type>
    <pay-info></pay-info>
    <bottom-query></bottom-query>
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

  export default {
    components: {
      ProductHeaderCar,
      BottomQuery,
      OrderInfo,
      PayType,
      OrderModel,
      PayInfo
    }
  }
</script>





