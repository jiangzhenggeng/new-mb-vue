<style lang="less" scoped="">
  .paylist__wrap{
    .paylist__wrap-row{
      display: flex;
      margin: 36px 0;
      font-size: 28px;
    }
    .paylist__wrap-name{
      color: #333;
    }
    .paylist__wrap-line{
      position: relative;
      display: block;
      margin: 0 24px;
      vertical-align: middle;
      flex: 1;
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        border-bottom: 2px dashed #ccc;
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
      padding: 0 24px;
      margin: 0 -24px;
      border-top: 2px solid #e6e6e6;
      text-align: right;
      line-height: 80px;
      &:after,
      &:before{
        content: '';
        position: absolute;
        bottom: 80px;
        right: 44px;
        width: 0;
        height: 0;
      }
      &:before {
        border: 20px solid #e6e6e6;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 20px solid transparent;
      }
      &:after {
        right: 46px;
        bottom: 78px;
        border: 18px solid #fff;
        border-left: 18px solid transparent;
        border-right: 18px solid transparent;
        border-top: 18px solid transparent;
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










