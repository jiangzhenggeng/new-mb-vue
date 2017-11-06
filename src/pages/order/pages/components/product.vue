<style lang="scss" >
  .order__product{
    display: flex;
    flex-direction: row;
    align-items: stretch;
    padding: 24px;
    background-color: #fff;

    .order__product-img{
      width: 200px;
      height: 200px;
      overflow: hidden;
      border-radius: 10px;
      img{
        width: 100%;
      }
    }
    .order__product-desc{
      margin-left: 30px;
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: stretch;
      justify-content: space-between;

      .product-title{
        max-height: 80px;
        line-height: 40px;
        color: #404040;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 32px;
      }
    }
    .order__deposit{
      font-size: 28px;
      color: #333;
    }
  }
</style>

<template>
  <div class="order__product mgt10">
    <div class="order__product-img">
      <img src="http://s1.jiguo.com/0ea145ef-23bd-4885-8265-f28db212a68f/230x230" />
    </div>
    <div class="order__product-desc">
      <h2 class="product-title">小佩Petkit宠物智能喂食器</h2>
      <div class="order__deposit">
        6折试用
      </div>
    </div>
  </div>
</template>


<script>
  import { mapState } from 'vuex'

  export default {

  }
</script>





