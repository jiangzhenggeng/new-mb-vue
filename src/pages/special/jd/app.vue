<template>
  <div class="body-content">
    <a class="btn-img" href="http://www.jiguo.com/event/index/1682.html" v-animate>
      <img src="./style/btn-bg.png"/>
    </a>

    <comtume-video/>
    <img class="player-introduced" src="./style/player-introduced.png"/>

    <div class="box-wrap">
      <div class="box-item" v-animate>
        <a href="http://www.jiguo.com/article/article/42677.html"><img class="item-img" src="./style/p1.png"/></a>
      </div>
      <div class="box-item" v-animate>
        <a href="http://www.jiguo.com/article/article/29262.html"><img class="item-img" src="./style/p2.png"/></a>
      </div>
      <div class="box-item" v-animate>
        <a href="http://www.jiguo.com/article/article/62465.html"><img class="item-img" src="./style/p3.png"/></a>
      </div>
      <div class="box-item" v-animate>
        <a href="http://www.jiguo.com/article/article/62470.html"><img class="item-img" src="./style/p4.png"/></a>
      </div>
    </div>

  </div>
</template>

<script>
  import comtumeVideo from './components/video.vue'

  export default {
    components: {
      comtumeVideo,
    }
  }
</script>

<style lang="scss">
  $IMAGES_PATH: '../../../style/images/';
  @import "../../../style/scss/app.scss";
  @import "./style/function.scss";
  html, body {
    min-height: 100%;
  }

  body {
    font-family: "PingFang SC", "Arial", sans-serif;
    background-image: url(./style/bg.jpg);
    background-position: left top;
    background-size: 100% auto;
    background-color: #0D052C;
    height: px2rem(5498);
  }

  a, a:hover, a:active, a:visited, a:link, a:focus {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    outline: none;
    background: none;
    text-decoration: none;
  }

  .body-content {
    position: relative;
    overflow: hidden;
  }

  .btn-img {
    width: px2rem(329);
    height: px2rem(65);
    display: block;
    position: absolute;
    left: 50%;
    top: px2rem(835);
    margin-left: px2rem(-329/2);
    z-index: 1;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .player-introduced {
    margin: auto;
    margin-top: px2rem(165);
    height: px2rem(100);
    display: block;
  }

  .box-item {
    margin: auto;
    margin-top: px2rem(110);
    width: px2rem(830);
    height: px2rem(590);
    .item-img {
      display: block;
      margin: auto;
      width: 100%;
      height: 100%;
    }
  }

  .k-animate-2 {
    transition: all 1s;
    transform: translateY(px2rem(50));
    opacity: 0;
  }

  .into-k-animate {
    transform: translateY(0);
    opacity: 1;
    &:active {
      animation: btn-active .5s;
    }
  }

  @keyframes btn-active {
    0% {
      transform: scale(1) translateZ(0)
    }
    50% {
      transform: scale(0.85) translateZ(0)
    }
    100% {
      transform: scale(1) translateZ(0)
    }
  }
</style>
