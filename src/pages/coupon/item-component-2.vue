<style lang="scss">
  @import "./../../style/scss/helpers/functions";
  @import "item";
</style>

<div class="coupon-left line-bg table  <% if(hg.coupon_package_user_type==1){ %>over<% } %>">
  <div class="table-cell tc">

  </div>
</div>

<template>
  <li v-waves.block="link"
      :class="`coupons__card-wrap ${item.isevent==0?'yellow':''} ${item.coupon_package_user_type==1?'gary':''}`"
      @click="toLink">
    <div class="coupons__card-left">
      <div class="coupons__card-money">
        <span>{{item.price | priceFilter }}</span>
        <span class="unit">元</span>
      </div>
      <div class="coupons__card-type-desc">{{item.cleftdesc}}</div>
    </div>
    <div class="coupons__card-right">
      <div class="coupons__card-desc">{{item.cdesc}}</div>
      <div class="coupons__card-time">有效期：{{item.start_time}} - {{item.end_time}}</div>
    </div>
    <div class="coupons__card-status">
      <template v-if="!item.selected">
        <div v-if="item.coupon_package_user_type==1">已过期</div>
        <div v-else-if="item.coupon_package_user_type==2">立即使用</div>
      </template>
    </div>
  </li>
</template>
<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      },
      link: {
        type: Boolean,
        default: true
      },
    },
    methods: {
      toLink () {
        if (this.link) {
          this.$router.push({
            path: '/mb/user/draw.html?id=' + this.item.id
          })
        }
      }
    },
    filters: {
      priceFilter (price) {
        return String(price).replace(/\.[0]+$/, '')
      }
    }
  }
</script>