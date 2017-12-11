<template>
  <footer>
    <div class="contact-wrapper main">
      <div class="footer-item">
        <h3>评选垂询邮箱</h3>
        <p><a href="mailto:habenhe@zhidx.com">habenhe@zhidx.com</a></p>
      </div>
      <div class="footer-item">
        <h3>媒体合作邮箱</h3>
        <p><a href="mailto:marketing@zhidx.com">marketing@zhidx.com</a></p>
      </div>
    </div>
  </footer>
</template>

<script>

	export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  footer {
    margin-top: 90px;
    background-color: #51BDEC;
    border-bottom: 20px solid #F8E71C;
    padding: 45px 0 45px;
  }

  .contact-wrapper {
    display: flex;
    justify-content: center;
  }

  .footer-item {
    color: #fff;
    h3, p {
      font-size: 30px;
      line-height: 42px;
      padding-left: 27px;
      font-weight: normal;
      a {
        color: #fff;
      }
    }
    &:before {
      content: '';
      background-color: #ffffff;
      display: block;
      width: 12px;
      height: 80px;
      float: left;
    }
    &:last-of-type {
      margin-left: 148px;
    }
  }
</style>
