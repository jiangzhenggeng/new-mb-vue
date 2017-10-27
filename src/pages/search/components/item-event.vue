<style lang="less" scoped="true">
  .item {
    position: relative;
    padding: 24px;
    &:before {
      content: '';
      display: block;
      clear: both;
      height: 1px;
      left: 0;
      width: 100%;
      position: absolute;
      background-color: #ebebeb;
      bottom: 0;
    }
    .stream-box {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: stretch;
    }
    .stream-title {
      line-height: 40px;
      max-height: 80px;
      overflow: hidden;
    }
    .stream-img {
      overflow: hidden;
      border-radius: 10px;
      height: 200px;
      width: 200px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .stream-right {
      flex: 1;
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: stretch;
    }
  }
</style>

<template>
  <li class="item" v-waves.block="true">
    <a :href="`/mb/event/index/${_item.eventid}.html`">
      <div class="stream-box">
        <div class="stream-img">
          <img
            v-lazy="`http://s1.jiguo.com/${_item.fileid}/230x230`"
            :src="`http://s1.jiguo.com/${_item.fileid}/230x230?imageView2/1/w/50/h/30/q/30`"
          />
        </div>
        <div class="stream-right">
          <div class="stream-title ft16">{{_item.name}}</div>
          <div class="stream-discount red mt10">
            <span class="red ft16">{{ _item.follownum }}人</span>
            <span class="gray ft12">申请</span>
          </div>
          <div class="stream-mall gray ft12">
            <span class="ft12" :class="_item.status.status" v-html="_item.status.title"></span>
          </div>
        </div>
      </div>
    </a>
  </li>
</template>
<script>

  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    computed: {
      _item () {
        this.item.status = this.item.status || {}
        return this.item
      }
    }
  }
</script>