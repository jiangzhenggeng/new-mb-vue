<style lang="scss">
  @import "../../style/scss/helpers/functions";
  .radio__wrap {
    display: inline-block;
    width: px2rem(50);
    height: px2rem(50);
    .radio__input {
      width: 100%;
      height: 100%;
      appearance: none;
      border: none;
      vertical-align: middle;
      background-color: transparent;
      outline: none;
      position: relative;
      &:after {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;

        content: '';
        display: block;

        background-size: px2rem(36) auto;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(./icon-radio-default.png);
        transition: background-image .3s;
      }
      &:checked:after {
        background-image: url(./icon-radio-select.png);
      }
    }
  }
</style>
<template>
  <div class="radio__wrap">
    <input class="radio__input" :type="type" :name="name" />
  </div>
</template>
<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'radio'
      },
      name: {
        type: String,
        default: ''
      }
    }
  }
</script>




















