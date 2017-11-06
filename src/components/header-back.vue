<template>
  <header class="header header-wrap">
    <div class="header header-inner" ref="header-inner">
      <div class="header__back-wrap">
        <a @click="back" class="header__back">
          <i class="icon icon-back" v-waves.circle="true"></i>
        </a>
      </div>
      <div class="header__title">
        <span>{{ title || '修改密码' }}</span>
      </div>
      <div class="header__right" v-if="rightTitle">
        <div @click="right" class="header__back red" v-waves.circle="true">
          {{ rightTitle }}
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import Cookie from 'js-cookie'
  import $ from 'jquery'
  import { mapState, mapActions } from 'vuex'

  export default {
    props: {
      title: {
        type: String,
        required: true
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

  @height: 104px;
  .icon {
    display: flex !important;
  }

  .header {
    background: #fff;
    position: relative;
    height: @height;
    z-index: 5;
  }

  .header-inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    position: fixed;
    border-bottom: 1px solid #ececec;
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
    height: @height;
    font-size: 36px;
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
    padding: 0 24px;
    font-size: 34px;
  }

  .header__back-wrap {
    height: @height;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    .header__back {
      width: @height;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>