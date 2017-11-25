<style lang="scss"  scoped="">
  @import "../../../../../style/scss/helpers/functions";
  .pagetop__wrap{
    width: px2rem(72);
    position: fixed;
    right: 0;
    bottom: px2rem(100);
    z-index: 2;
    img{
      width: 100%;
    }
  }
</style>
<template>
  <div class="pagetop__wrap" @click="scrollTop">
    <img src="./page-top.svg"/>
  </div>
</template>
<script>
  import $ from 'jquery'
  export default {
    methods:{
      scrollTop(){
        $('html,body').animate({
          scrollTop:0
        })
      }
    }
  }
</script>