<style lang="scss" scoped="">
  @import "../../../../../style/scss/helpers/functions";

  .com2-logo__wrap {
    margin: auto;
    width: px2rem(477);
    .com2-logo__wrap-inner {
      display: flex;
    }

    .com2-logo__wrap-logo {
      width: px2rem(112);
      height: px2rem(91);
      img {
        width: 100%;
        height: 100%
      }
    }
    .com2-logo__desc {
      flex: 1;
      text-align: center;
    }
    .com2-logo__title {
      color: #51C0F0;
      font-weight: 500;
      font-size: px2rem(40);
      line-height: px2rem(56);
    }
    .com2-logo__english {
      color: #FFFFFF;
      font-size: px2rem(20);
      line-height: px2rem(28);
      margin-top: px2rem(8);
    }
  }
</style>

<template>
  <div class="com2-logo__wrap">
    <div class="com2-logo__wrap-inner">
      <div class="com2-logo__wrap-logo">
        <img src="./i-cv.svg"/>
      </div>
      <div class="com2-logo__desc">
        <div class="com2-logo__title">年度创新产品-投票</div>
        <div class="com2-logo__english">Innovative Product of the Year</div>
      </div>
    </div>
  </div>
</template>
