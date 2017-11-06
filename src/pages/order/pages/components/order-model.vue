<style lang="scss" >
  @import "./module.less";

  .model__wrap {
    .model__item-box{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin-left: -20px;
      width: 105%;
    }
    .model__item{
      float: left;
      min-width: 150px;
      height: 80px;
      line-height: 80px;
      cursor: pointer;
      text-align: center;
      margin-left: 20px;
      margin-bottom: 20px;
      position: relative;
      user-select: none;
      label{
        display: block;
      }

      .model__text{
        border: 2px solid #e9e9e9;
        border-radius: 10px;
        color: #4c4c4c;
        padding: 0 20px;
        transition: all .3s;
        &:active{
          color: #fff - 20%;
          border-color: #e9e9e9 + 10%;
        }
      }
      .model__input-radio{
        position: absolute;
        width: 1px;
        height: 1px;
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










