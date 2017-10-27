<template>
  <div class="content-wrap">
    <loading v-show="show"/>
    <page-header
      :search="false"
      :user="false"
      curr="youpin"
    />
    <router-view></router-view>
  </div>
</template>

<script>
  import pageHeader from './../../../components/header.vue'
  import tools from './../../../tools'
  import { mapState } from 'vuex'
  import $ from 'jquery'

  export default {
    components: {
      pageHeader
    },
    computed: {
      ...mapState([
        'show'
      ])
    },
    mounted () {
      var hasAnimate = $('.k-animate:not(.into-k-animate),.k-animate-2:not(.into-k-animate)')
      var winHeight = $(window).height();
      var throttle = tools.throttle(function () {
        var scrollTop = $(window).scrollTop()
        hasAnimate.filter(function () {
          if ($(this).hasClass('into-k-animate')) {
            return false
          }
          if (scrollTop + winHeight > $(this).offset().top) {
            $(this).addClass('into-k-animate')
            return false
          }
          return true
        })
      });
      $(window).off('scroll.into.animate').on('scroll.into.animate', function () {
        throttle();
      }).trigger('scroll.into.animate')
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../../style/less/base.less";

  .content-wrap {
    font-family: "SF Pro SC", "HanHei SC", "SF Pro Text", "Myriad Set Pro", "SF Pro Icons", "Apple Legacy Chevron", "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  }

  .k-animate {
    transition: all 1s;
    transform: translateY(-50px);
    opacity: 0;
  }

  .k-animate-2 {
    transition: all 1s;
    transform: translateY(50px);
    opacity: 0;
  }

  .into-k-animate {
    transform: translateY(0px);
    opacity: 1;
  }
</style>
