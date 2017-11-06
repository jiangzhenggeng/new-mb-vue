<style lang="scss">
  @import "./module.scss";

  .model__wrap {
    .model__item-box{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin-left: px2rem(-20);
      width: 105%;
    }
    .model__item{
      float: left;
      min-width: px2rem(150);
      height: px2rem(80);
      line-height: px2rem(80);
      cursor: pointer;
      text-align: center;
      margin-left: px2rem(20);
      margin-bottom: px2rem(20);
      position: relative;
      user-select: none;
      label{
        display: block;
      }

      .model__text{
        border: px2rem(2) solid #e9e9e9;
        border-radius: px2rem(10);
        color: #4c4c4c;
        padding: 0 px2rem(20);
        transition: all .3s;
        font-size: px2rem(28);
        &:active{
          color: #fff - 20%;
          border-color: #e9e9e9 + 10%;
        }
      }
      .model__input-radio{
        position: absolute;
        width: px2rem(1);
        height: px2rem(1);
        appearance: none;
        outline: none;
        background: none;
        border: none;
        &:checked{
          + .model__text{
            color: #fff;
            background-color: #fe5341;
            border-color: #fe5341;
          }
        }
      }
    }
  }
</style>
<template>
  <div class="module__wrap model__wrap">
    <h3 class="module__title">选择型号</h3>
    <div class="module__box">
      <ul class="model__item-box">
        <li class="model__item">
          <label>
            <input class="model__input-radio" type="radio" name="model"/>
            <div class="model__text">1.8m</div>
          </label>
        </li>
        <li class="model__item">
          <label>
            <input class="model__input-radio" type="radio" name="model"/>
            <div class="model__text">1.8m</div>
          </label>
        </li>
        <li class="model__item">
          <label>
            <input class="model__input-radio" type="radio" name="model"/>
            <div class="model__text">1.8m</div>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

  export default {
    data () {
      return {}
    },
    components: {},
    methods: {},
    filters: {}
  }
</script>










