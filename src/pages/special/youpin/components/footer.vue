<template>
  <div class="footer">
    <div class="footer-erweima-item">
      <div class="footer-erweima k-animate-2">
        <!--<div class="tips">欢迎关注极果优品服务号</div>-->
        <img src="../style/images/icon/icon-12.jpg" />
      </div>
      <div class="footer-weixin k-animate-2">
        <div>极果优品服务号：jgypgw</div>
        <!--<div><a href="mailto:jgyp@jiguo.com">邮箱：jgyp@jiguo.com</a></div>-->
      </div>
    </div>

    <div class="footer-erweima-item k-animate-2">
      <div class="footer-erweima">
        <!--<div class="tips">欢迎关注极果优品服务号</div>-->
        <img src="../style/images/erweima2.jpeg" />
      </div>
      <div class="footer-weixin">
        <div>合作勾搭微信：jgypfx7</div>
        <!--<div><a href="mailto:jgyp@jiguo.com">邮箱：jgyp@jiguo.com</a></div>-->
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .footer {
    display: flex;
    padding: 65px 0;
    align-items: stretch;
    flex-direction: row;
    justify-content: center;
    text-align: center;
  }
  .footer-erweima-item:nth-child(2){
    margin-left: 50px;
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
    display: inline-block;
    text-align: left;
    a{color: #1B1B1B;}
  }
</style>
