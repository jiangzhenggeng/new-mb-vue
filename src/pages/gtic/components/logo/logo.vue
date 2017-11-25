<style lang="scss" scoped="">
  @import "../../../../style/scss/helpers/functions";

  .logo__wrap {
    margin: px2rem(120) auto;
    img {
      width: px2rem(580);
      display: block;
      margin: auto;
    }
  }
</style>
<template>
  <div class="logo__wrap">
    <img src="./logo.svg"/>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  import LogoImg from './logo.svg'
  export default {
    mounted () {
      var img = new Image()
      img.onload = ()=>{
        this.hidePageLoading()
      }
      img.src = LogoImg
    },
    methods: {
      ...mapActions(['hidePageLoading'])
    }
  }
</script>