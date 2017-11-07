<template>
  <div class="header header-wrap" ref="header-wrap">
    <div class="header__back-wrap">
      <a @click="back" class="header__back">
        <i class="icon icon-back" v-waves.circle="true"></i>
      </a>
    </div>
    <div class="header__title">
      <slot name="title">
        <span>{{ title }}</span>
      </slot>
    </div>
    <div class="header__right" v-if="$slots['right']||rightTitle">
      <slot name="right">
        <div @click="right" class="header__back red" v-waves.circle="true">
          {{ rightTitle }}
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
  import Cookie from 'js-cookie'
  import $ from 'jquery'
  import { mapState, mapActions } from 'vuex'

  export default {
    props: {
      title: {
        type: String,
        default: '导航标题'
      },
      rightTitle: {
        type: String,
        default: ''
      },
      setAbsolute: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      back: function () {
        this.$emit('back')
      },
      right () {
        this.$emit('right')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/scss/helpers/functions";

  $height: px2rem(104);
  .icon {
    display: flex !important;
  }

  .header {
    background: #fff;
    position: relative;
    height: $height;
    z-index: 5;
  }

  .header-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    position: fixed;
    border-bottom: px2rem(1) solid #ececec;
    box-sizing: border-box;
    width: 100%;
    top: 0;
    left: 0;
  }

  .header__title {
    flex: 1;
    text-align: center;
    position: absolute;
    width: 100%;
    z-index: 1;
    height: $height;
    font-size: px2rem(36);
    color: #808080;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header__back-wrap, .header__right {
    position: relative;
    z-index: 2;
  }

  .header__right {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 px2rem(24);
    font-size: px2rem(34);
  }

  .header__back-wrap {
    height: $height;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    .header__back {
      width: $height;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
<style lang="scss">
  @import "../style/scss/helpers/functions";
  .header-wrap + .page__body{
    border-top: px2rem(104) solid transparent;
  }
</style>