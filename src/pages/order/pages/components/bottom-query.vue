<style lang="scss">
  @import "../../../../style/scss/helpers/functions";
  .order__submit-height,
  .order__submit-wrap {
    line-height: px2rem(100);
    height: px2rem(100);
  }

  .order__submit-wrap {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0 px2rem(24);
    background-color: #fff;
    box-shadow: 0 px2rem(-2) px2rem(4) rgba(0, 0, 0, 0.1);
    color: #808080;
    font-size: px2rem(26);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .rmb, .amount {
      color: #fe5341;
      font-weight: bold;
    }
    .order__submit-btn {

      display: flex;
      justify-content: center;
      align-items: center;
      height: px2rem(64);
      border-radius: px2rem(4);
      color: #fff;
      font-size: px2rem(28);
      background-color: #fe5341;
      padding: 0 px2rem(24);
    }
  }
</style>

<template>
  <div class="order__submit-height">
    <div class="order__submit-wrap order__submit-height">
      <div class="order__submit-left">
        <span class="text">应付金额：</span>
        <span class="rmb">￥</span>
        <span class="amount">798.8</span>
      </div>
      <div class="order__submit-btn">提交订单</div>
    </div>
  </div>
</template>


<script>
  import { mapState } from 'vuex'

  export default {}
</script>





