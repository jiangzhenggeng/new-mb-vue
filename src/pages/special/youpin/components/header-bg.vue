<template>
  <header class="header-icon-bg">
    <div class="header-logo k-animate" ref="header-logo">
      <img :src="headerLogo"/>
    </div>
    <div class="header-text k-animate" ref="header-text">
      <p>专业「内容电商」服务平台</p>
      <p>为用户甄选每一件商品</p>
      <p>用心服务千万优质商家、内容创业者</p>
    </div>
    <div class="header-youzan k-animate" ref="header-youzan">
      <img src="../style/images/icon/header-youzan.png"/>
      <span>有赞官方推荐优质分销商</span>
    </div>
  </header>
</template>

<script>
  import headerBg from '../style/images/icon/header-bg.jpg'
  import headerLogo from '../style/images/icon/header-logo.png'
  import { mapActions } from 'vuex'
  import $ from 'jquery'

  export default {
    data () {
      return {
        headerLogo
      }
    },
    created () {
      var load1,load2;
      this.loadImg(headerBg,function () {
        load2 && this._hidePageLoading()
        load1 = true;
      });
      this.loadImg(headerLogo,function () {
        load1 && this._hidePageLoading()
        load2 = true;
      });
    },
    methods: {
      loadImg(src,callback){
        var img = new Image();
        img.onload = () => {
          (callback || function(){}).call(this);
        }
        img.src = src;
      },
      _hidePageLoading(){
        this.hidePageLoading();
        this.$nextTick(()=>{
          $(this.$refs['header-logo']).addClass('into-k-animate');
          this.$nextTick(()=>{
            $(this.$refs['header-logo']).addClass('into-k-animate');
          });
          setTimeout(()=>{
            this.$nextTick(()=>{
              $(this.$refs['header-text']).addClass('into-k-animate');
            });
          },300);
          setTimeout(()=>{
            this.$nextTick(()=>{
              $(this.$refs['header-youzan']).addClass('into-k-animate');
            });
          },600);
        });
      },
      ...mapActions([
        'hidePageLoading'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../../style/scss/helpers/functions";
  .header-icon-bg {
    $h: px2rem(610);
    height: $h;
    background-image: url(../style/images/icon/header-bg.jpg);
    background-repeat: no-repeat;
    background-size: auto $h;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    line-height: px2rem(32);
    font-size: px2rem(22);
    color: #fff;
  }

  .header-logo {
    margin-top: px2rem(150);
    height: px2rem(85);
    img {
      height: 100%
    }
  }

  .header-text {
    margin-top: px2rem(80);
  }

  .header-youzan {
    background: #FFFFFF;
    border-radius: px2rem(50);
    line-height: px2rem(44);
    color: #000;
    font-size: px2rem(14);
    margin-top: px2rem(30);
    padding: 0 px2rem(35);
    img {
      width: px2rem(20)
    }
  }
</style>
