<style lang="scss" scoped="">
  @import "../../../../../style/scss/helpers/functions";

  .share__wrap {
    /* Rectangle 11: */
    background-image: linear-gradient(-139deg, #555555 0%, #333333 100%);
    box-shadow: 0 3px 6px 0 #000000;
    border-radius: 4px 0 0 4px;
    width: px2rem(80);
    height: px2rem(80);
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    right: 0;
    top: px2rem(300);
    z-index: 9;
    img{
      width: px2rem(36);
      height: px2rem(36);
      display: block;
    }
  }
</style>

<template>
  <div class="share__wrap">
    <img src="./share.svg"/>
  </div>
</template>
<script>
	import {mapState} from 'vuex'

	export default {

	}
</script>
