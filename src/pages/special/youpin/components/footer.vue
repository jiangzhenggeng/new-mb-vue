<template>
  <div class="footer">
    <!--<div class="footer-logo k-animate-2">-->
      <!--<img src="../style/images/icon/footer-logo.png" />-->
    <!--</div>-->
    <div class="footer-erweima k-animate-2">
      <div class="tips">欢迎关注极果优品服务号</div>
      <img src="../style/images/icon/icon-12.jpg" />
    </div>
    <div class="footer-weixin k-animate-2">
      <div>客服微信号：jgypvip1</div>
      <div><a href="mailto:jgyp@jiguo.com">邮箱：jgyp@jiguo.com</a></div>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 65px 0;
  }
  .footer-erweima{
    margin-top: 30px;
    text-align: center;
    font-size: 24px;
    .tips{
      margin-bottom: 10px;
      font-size: 28px;
    }
    img{
      width: 240px;
    }
  }
  .footer-weixin{
    color: #1B1B1B;
    font-size: 24px;
    margin-top: 10px;
    a{color: #1B1B1B;}
  }
</style>
