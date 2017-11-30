<template>
  <a class="go-wrapper" href="javascript:;" target="_blank">
    <div class="icon-gtic">
      <img src="../assets/images/GTIC 2018.png" alt="">
    </div>
    <div class="go-content">
      <p>主会场</p>
      <div class="arrows"></div>
    </div>
  </a>
</template>

<script>

	export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .go-wrapper {
    display: block;
    width: 72px;
    height: 170px;
    background: linear-gradient(#555, #000);
    border-radius: 4px 0 0 4px;
    position: fixed;
    top: 178px;
    right: 0;
    box-sizing: border-box;
  }

  .icon-gtic {
    width: 38px;
    margin: 20px auto 0;
    img {
      width: 100%;
    }
  }

  .go-content {
    margin-top: 54px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      color: #FFF78D;
      font-size: 13px;
      text-align: center;
    }
    .arrows {
      width: 20px;
      height: 20px;
      background: url("../assets/images/icon-arrows.png") no-repeat center center;
      background-size: 20px auto;
    }
  }
</style>
