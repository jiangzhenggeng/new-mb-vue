<style lang="scss"  scoped="">
  @import "../../../../../style/scss/helpers/functions";
  .first__wrap{
    margin: px2rem(80) auto;
    margin-top: px2rem(240);
    font-size: px2rem(24);
    color: #B3B3B3;
    .first__wrap-inner{
      border:px2rem(2) solid #4F4F4F;
      width: px2rem(560);
      margin: auto;
      padding: px2rem(34);
      position: relative;
    }
    .first__wrap-title{
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%) translateY(-50%);
    }
    .first__wrap-text{
      text-align: justify;
      line-height: px2rem(30);
      margin-top: px2rem(130);
      p{
        margin-top: px2rem(20);
      }
    }
  }
</style>
<template>
  <div class="first__wrap">
    <div class="first__wrap-inner">
      <div class="first__wrap-title">
        <common-title
          :index="`01`"
          :title="`Introduction`"
          :en="`GTIC AWARDS 2018`"
          :bottom="`/ 大会介绍 /`"
        />
      </div>
      <div class="first__wrap-text">
        <p>GTIC AWARDS 2018，由智东西和极果权威发起。此次年度评选聚焦智能变革力量，着眼产业升级趋势，将对在2017年度有着卓越表现、快速成长、大胆创新、取得商业突破的优秀公司、产品和解决方案进行表彰。</p>
        <p>走过2016年的技术普及元年，人工智能在2017年与实体经济快速融合，开始对各个行业进行赋能和变革。不过，这不只是人工智能的冲锋号角，也是国内传统产业升级的大契机。那么，在这一轮智能化浪潮中，谁将是这一年度最具变革性的力量？谁又是过去一年跑的最快的AI先锋？谁的产品在突破常规，引领创新？谁的解决方案又在很好地为客户创造价值呢？</p>
        <p>2018年3月9日，GTIC 2018将在上海召开。届时，我们将在峰会颁奖仪式上正式公布GTIC AWARDS 2018的获奖名单，并向获奖企业颁奖。</p>
      </div>
    </div>
  </div>
</template>
<script>
  import CommonTitle from './../common-title/common-title.vue'

  export default {
    components: {
      CommonTitle
    }
  }
</script>