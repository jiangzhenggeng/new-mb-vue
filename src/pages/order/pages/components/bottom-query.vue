<style lang="less">

  .order__submit-height,
  .order__submit-wrap {
    line-height: 100px;
    height: 100px;
  }

  .order__submit-wrap {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0 24px;
    background-color: #fff;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
    color: #808080;
    font-size: 26px;
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
      height: 64px;
      border-radius: 4px;
      color: #fff;
      font-size: 28px;
      background-color: #fe5341;
      padding: 0 24px;
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





