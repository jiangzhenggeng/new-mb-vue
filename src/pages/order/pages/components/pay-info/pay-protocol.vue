<style lang="scss" scoped>
  .order-tips{
    .radio-box{
      display: block;
    }
    .pay-protocol{
      vertical-align: middle;
    }
  }
</style>
<template>
  <div class="order-tips mgt10">
    <label class="radio-box">
      <input-radio type="checkbox" name="agreement"></input-radio>
      <span class="pay-protocol">我同意<a href="/mb/html/useragreement.html" class="blue">《极果试用活动协议》</a></span>
    </label>
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










