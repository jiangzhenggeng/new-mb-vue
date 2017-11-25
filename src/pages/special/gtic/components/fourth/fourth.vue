<style lang="scss" scoped="">
  @import "../../../../../style/scss/helpers/functions";

  .fourth__wrap {
    margin-top: px2rem(80);
    font-size: px2rem(24);
    color: #999999;
    .fourth__wrap-text {
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0 px2rem(40);
    }
    .fourth__wrap-item{
      margin-bottom: px2rem(13);
    }
  }

</style>
<template>
  <div class="fourth__wrap">
    <div class="fourth__wrap-inner">
      <div class="fourth__wrap-title">
        <common-title
          :index="`04`"
          :title="`Judges`"
          :bottom="`/ 评委嘉宾 /`"
        />
      </div>
      <div class="fourth__wrap-text">
        <common-item class="fourth__wrap-item" v-for="item in list" :item="item" :key="item | getKey"></common-item>
      </div>
    </div>
  </div>
</template>
<script>
  import CommonTitle from './../common-title/common-title.vue'
  import CommonItem from './item.vue'

  export default {
    data () {
      return {
        list: Array(12).fill({
          name: '刘鹏',
          img: require('./images/1.jpg'),
          desc: '真格基金董事<br>总经理'
        })
      }
    },
    components: {
      CommonTitle,
      CommonItem
    },
    filters: {
      getKey (item) {
        return item.key || Math.random()
      }
    }
  }
</script>