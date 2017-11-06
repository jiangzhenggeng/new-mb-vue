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
  .item-wrap {
    margin: auto;
    margin-top: 10px;
    position: relative;
  }

  .item-img {
    border-radius: 4px;
    width: 600px;
    height: 300px;
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
    bottom: 20px;
    width: 100%;
    text-align: center;
    color: #fff;
    .n1 {
      line-height: 40px;
      font-size: 28px;
    }
    .n2 {
      line-height: 28px;
      font-size: 20px;
      margin-top: 10px;
    }
  }
</style>
