<style lang="scss" scoped="">
  @import "../../../../../style/scss/helpers/functions";
  .paylist__wrap{
    .paylist__wrap-row{
      display: flex;
      margin: px2rem(36) 0;
      font-size: px2rem(28);
    }
    .paylist__wrap-name{
      color: #333;
    }
    .paylist__wrap-line{
      position: relative;
      display: block;
      margin: 0 px2rem(24);
      vertical-align: middle;
      flex: 1;
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        border-bottom: px2rem(2) dashed #ccc;
      }
    }
    .paylist__wrap-del {
      color: #a3a3a3;
      font-weight: 700;
      vertical-align: middle;
    }
    .paylist__wrap-price {
      color: #333;
      font-weight: 700;
      vertical-align: middle;
    }
    .paylist__wrap-all {
      position: relative;
      padding: 0 px2rem(24);
      margin: 0 px2rem(-24);
      border-top: px2rem(2) solid #e6e6e6;
      text-align: right;
      line-height: px2rem(80);
      &:after,
      &:before{
        content: '';
        position: absolute;
        bottom: px2rem(80);
        right: px2rem(44);
        width: 0;
        height: 0;
      }
      &:before {
        border: px2rem(20) solid #e6e6e6;
        border-left: px2rem(20) solid transparent;
        border-right: px2rem(20) solid transparent;
        border-top: px2rem(20) solid transparent;
      }
      &:after {
        right: px2rem(46);
        bottom: px2rem(78);
        border: px2rem(18) solid #fff;
        border-left: px2rem(18) solid transparent;
        border-right: px2rem(18) solid transparent;
        border-top: px2rem(18) solid transparent;
      }
    }
    .paylist__wrap-all-price {
      color: #fe5341;
      font-weight: 700;
    }
  }
</style>
<template>
  <div class="paylist__wrap">
    <div class="paylist__wrap-row">
      <span class="paylist__wrap-name">5.5折价格</span>
      <span class="paylist__wrap-line"></span>
      <span class="paylist__wrap-del"><del>￥<span id="origin">198</span></del></span>
      <span class="paylist__wrap-price">￥<span id="price">108.9</span></span>
    </div>
    <div class="paylist__wrap-row">
      <span class="paylist__wrap-name">试用押金</span>
      <span class="paylist__wrap-line"></span>
      <span class="paylist__wrap-price">￥<span id="deposit">50</span></span>
    </div>
    <div class="paylist__wrap-all">
      支付金额：<span class="paylist__wrap-all-price">￥<span class="amount">158.9</span></span>
    </div>
  </div>
</template>
<script>

</script>










