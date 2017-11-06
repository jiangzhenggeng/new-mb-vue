<template>
  <div class="item-wrap k-animate-2">
    <a :href="item.url">
      <div class="item-img">
        <img :src="item.cover"/>
        <div class="item-mask"></div>
      </div>
      <div class="item-title">
        <div class="n1">{{ item.title }}</div>
        <div class="n2" v-if="item.desc">{{ item.desc }}</div>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../../style/scss/helpers/functions";
  .item-wrap {
    margin: auto;
    margin-top: px2rem(10);
    position: relative;
  }

  .item-img {
    border-radius: px2rem(4);
    width: px2rem(600);
    height: px2rem(300);
    overflow: hidden;
    position: relative;
    .item-mask {
      background: rgba(0, 0, 0, 0.60);
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
    img {
      width: 100%;
      height: 100%
    }
  }

  .item-title {
    position: absolute;
    left: 0;
    bottom: px2rem(20);
    width: 100%;
    text-align: center;
    color: #fff;
    .n1 {
      line-height: px2rem(40);
      font-size: px2rem(28);
    }
    .n2 {
      line-height: px2rem(28);
      font-size: px2rem(20);
      margin-top: px2rem(10);
    }
  }
</style>
