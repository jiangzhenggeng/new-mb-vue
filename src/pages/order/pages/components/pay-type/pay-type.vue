<style lang="scss" >
  @import "./../module.less";
</style>
<style lang="scss" scoped="">
  .paytype__{
    &row{
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #f1f1f1;
      &:last-child{
        border-bottom: none;
      }
    }
    &row-inner{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img{
        height: 52px;
      }
    }
  }
</style>
<template>
  <div class="module__wrap">
    <h3 class="module__title">支付方式</h3>
    <div class="module__box">
      <div class="paytype__row">
        <label class="paytype__row-inner">
          <img src="./icon-zhifubao-pay.png"/>
          <input-radio type="radio" name="pay-type"></input-radio>
        </label>
      </div>
      <div class="paytype__row">
        <label class="paytype__row-inner">
          <img src="./icon-weixin-pay.png"/>
          <input-radio type="radio" name="pay-type"></input-radio>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
  import InputRadio from '@/components/input-radio/index.vue'

  export default {
    components: {
      InputRadio
    }
  }
</script>










