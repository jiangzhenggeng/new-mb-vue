<style lang="scss">
  @import "../../../style/scss/helpers/functions";

  .spinner {
    height: px2rem(80);
    text-align: center;
    font-size: px2rem(20);
    padding: px2rem(16) 0;
    > div {
      background-color: #e8e8e8;
      height: 100%;
      width: px2rem(6);
      display: inline-block;
      animation: stretchdelay 1.2s infinite ease-in-out;
    }
    .rect2 {
      animation-delay: -1.1s;
    }

    .rect3 {
      animation-delay: -1.0s;
    }

    .rect4 {
      animation-delay: -0.9s;
    }

    .rect5 {
      animation-delay: -0.8s;
    }
  }

  @keyframes stretchdelay {
    0%, 40%, 100% {
      transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1.0);
    }
  }
</style>

<template>
  <div class="spinner">
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="rect3"></div>
    <div class="rect4"></div>
    <div class="rect5"></div>
  </div>
</template>