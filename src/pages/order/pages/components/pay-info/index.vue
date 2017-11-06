<style lang="scss" >
  @import "./../module.less";
</style>
<style lang="scss" scoped="">

</style>
<template>
  <div class="module__wrap">
    <div class="module__box">
      <pay-list></pay-list>
      <pay-desc></pay-desc>
      <pay-protocol></pay-protocol>
    </div>
  </div>
</template>
<script>
  import PayList from './pay-list.vue'
  import PayDesc from './pay-desc.vue'
  import PayProtocol from './pay-protocol.vue'
  export default {
    components: {
      PayList,
      PayDesc,
      PayProtocol
    }
  }
</script>










