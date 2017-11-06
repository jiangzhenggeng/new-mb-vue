<template>
  <div class="sub-header">
    <div class="sub-header-logo">
      <img v-if="sub_data.sub_logo=='icon-1.png'" src="../../style/images/icon/icon-1.png"/>
      <img v-if="sub_data.sub_logo=='icon-6.png'" src="../../style/images/icon/icon-6.png"/>
      <img v-if="sub_data.sub_logo=='icon-11.png'" src="../../style/images/icon/icon-11.png"/>
    </div>
    <div class="sub-header-title">
      <h3>{{sub_data.sub_title}}</h3>
      <div class="sub-header-title-s1">{{sub_data.sub_en_title}}</div>
    </div>
    <div class="sub-header-desc" v-if="sub_data.sub_desc">{{sub_data.sub_desc}}</div>
    <div class="sub-header-button" v-if="button">
      <button @click="openRegister(item)">点击申请</button>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      sub_data:{
        type:Object,
        default:{}
      },
      button:{
        type:Boolean,
        default:true
      },
      item:{
        type:Object,
        default:function () {
          return {};
        }
      }
    },
    data () {
      return {}
    },
    methods: {
      openRegister(){
        this.$emit('openRegister',this.item.type);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../../../style/scss/helpers/functions";
  .sub-header{
    text-align: center;
    .sub-header-logo{
      height: px2rem(42);
      img{ height: 100% }
    }
    .sub-header-title{
      font-size: 0;
    }
    .sub-header-title h3{
      font-size: px2rem(48);
      color: #000000;
      line-height: px2rem(68);
      margin-top: px2rem(15);
    }
    .sub-header-title-s1{
      background: #BEBEBE;
      border-radius: px2rem(40);
      padding: 0 px2rem(25);
      display: inline-block;
      color: #fff;
      font-size: px2rem(14);
      line-height: 1.3;
      letter-spacing: px2rem(4.5);
    }
    .sub-header-desc{
      line-height: px2rem(28);
      color: #666666;
      font-size: px2rem(20);
      margin-top: px2rem(10);
    }
    .sub-header-button button{
      outline: none;
      width: px2rem(190);
      line-height: px2rem(50);
      height: px2rem(50);
      text-align: center;
      color: #fff;
      margin-top: px2rem(30);
      background-image: linear-gradient(-180deg, #F96A4C 0%, #F86036 100%);
      border: none;
      box-shadow: 0 px2rem(2) px2rem(4) 0 #F66039, inset 0 px2rem(1) 0 0 rgba(255,255,255,0.50);
      border-radius: px2rem(4);
      font-size: px2rem(24);
    }
  }
</style>
