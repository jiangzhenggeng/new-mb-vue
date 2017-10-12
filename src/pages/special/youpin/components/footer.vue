<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="../style/images/icon/footer-logo.png" />
    </div>
    <div class="footer-erweima">
      <img src="../style/images/icon/icon-12.jpg" />
      <div class="tips">扫码关注“极果优品”微信</div>
    </div>
    <div class="footer-weixin">
      <div>微信服务号：jgypvip1</div>
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
      margin-top: 10px;
    }
    img{
      width: 270px;
    }
  }
  .footer-weixin{
    margin-top: 30px;
    color: #1B1B1B;
    font-size: 24px;
    a{color: #1B1B1B;}
  }
</style>
