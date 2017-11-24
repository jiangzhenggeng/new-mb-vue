<style lang="scss" scoped="">
  @import "../../../../style/scss/helpers/functions";
  .item__wrap{
    .img{
      width: px2rem(215);
      height: px2rem(215);
      overflow: hidden;
      img{
        width: 100%;
        display: block;
      }
    }
    .desc{
      background: #51BDEC;
      color: #0C0C0C;
      text-align: center;
      padding: px2rem(18) 0;
    }
    .name{
      font-size: px2rem(24);
      line-height: px2rem(33);
    }
    .text{
      font-size: px2rem(20);
      line-height: px2rem(24);
      margin-top: px2rem(8);
    }
  }
</style>
<template>
  <div class="item__wrap">
    <div class="img">
      <img :src="item.img"/>
    </div>
    <div class="desc">
      <div class="name">{{ item.name }}</div>
      <div class="text" v-html="item.desc"></div>
    </div>
  </div>
</template>
<script>

  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>