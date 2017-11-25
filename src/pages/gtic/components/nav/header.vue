<style lang="scss" scoped="">
  @import "../../../../style/scss/helpers/functions";

  .header__wrap {
    height: px2rem(88);
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 4;

    ul {
      display: block;
      font-size: 0;
      overflow-y: hidden;
      overflow-x: scroll;
      white-space: nowrap;
      &::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
      &::-webkit-scrollbar-track {
        border-radius: 0;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 0px;
      }
    }
    li {
      display: inline-block;
      min-width: px2rem(80);
      overflow: hidden;
      color: #CCCCCC;
      font-size: px2rem(16);
      position: relative;
      text-align: right;
      padding-right: px2rem(50);
      padding-left: px2rem(30);
      box-sizing: content-box;
      > * {
        pointer-events: none;
      }
      &:after {
        content: '';
        display: block;
        position: absolute;
        right: px2rem(20);
        bottom: 0;
        transform: rotateZ(30deg);;
        background: #666666;
        width: px2rem(2);
        height: px2rem(35);
      }
      .header__title {
        font-size: px2rem(16);
      }
      .header__title-en {
        font-size: px2rem(32);
      }
      &.on {
        .header__title {
          color: #FFF78D;
        }
        .header__title-en {
          color: #52C1F3;
        }
      }
    }
  }
</style>
<template>
  <div class="header__wrap">
    <ul ref="ul">
      <li class="on" @click="scrollTopId($event)">
        <div class="header__title">首页</div>
        <div class="header__title-en">Home</div>
      </li>
      <li @click="scrollTopId($event,'introduce')">
        <div class="header__title">大会介绍</div>
        <div class="header__title-en">Introduce</div>
      </li>
      <li @click="scrollTopId($event,'time-line')">
        <div class="header__title">评选流程</div>
        <div class="header__title-en">Time Line</div>
      </li>
      <li @click="scrollTopId($event,'awards')">
        <div class="header__title">奖项公布</div>
        <div class="header__title-en">Awards</div>
      </li>
      <li @click="scrollTopId($event,'judges')">
        <div class="header__title">评委嘉宾</div>
        <div class="header__title-en">Judges</div>
      </li>
      <li @click="scrollTopId($event,'host')">
        <div class="header__title">主办</div>
        <div class="header__title-en">Host</div>
      </li>
    </ul>
  </div>
</template>
<script>
  import $ from 'jquery'

  export default {
    methods: {
      scrollTopId (event, id) {
        var dom = $('html,body')
        if (id) {
          dom = $('#' + id)
        }
        var top = $(dom).offset().top - $('.header-nav').height()
        if (id == 'introduce') {
          top -= $('.first__wrap-title').height() / 2
        }

        if (dom.length) {
          $('html,body').animate({
            scrollTop: top
          })
          $(event.currentTarget).closest('ul').find('.on').removeClass('on')
          $(event.currentTarget).addClass('on')
        }

        var ulLeft = $(this.$refs['ul']).scrollLeft()
        ulLeft = ulLeft + $(event.currentTarget).offset().left - ( $(window).width() / 2 ) + ($(event.currentTarget).outerWidth() / 2)
        $(this.$refs['ul']).animate({
          scrollLeft: ulLeft
        })
      }
    }
  }
</script>