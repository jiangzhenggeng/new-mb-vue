<template>
  <transition name="modal">
    <div class="register-wrap">
      <div style="width: 100%;margin-top: 90px;">
        <div class="register-body">

          <div class="register-header">
            <div class="t1">申请成为</div>
            <div class="t2">极果优品供应商</div>
            <div class="register-close" @click="close">
              <img src="../../style/images/close.svg"/>
            </div>
          </div>

          <div class="register-input-box">
            <div class="register-input-body">
              <form ref="form-data">
                <template v-if="type==1">
                  <div class="register-item-wrap">
                    <div class="register-item-text">产品名称：</div>
                    <div class="register-item-input">
                      <input type="text" ref="_v_pname" name="pname"/>
                      <div class="error-msg">填写产品名称</div>
                    </div>
                  </div>

                  <div class="register-item-wrap">
                    <div class="register-item-text">产品特点：</div>
                    <div class="register-item-input">
                      <textarea ref="_v_feature" name="feature"></textarea>
                      <div class="error-msg">填写产品特点</div>
                    </div>
                  </div>

                  <div class="register-item-wrap">
                    <div class="register-item-text">厂商全称：</div>
                    <div class="register-item-input">
                      <input ref="_v_factory_name" type="text" name="factory_name"/>
                      <div class="error-msg">填写厂商全称</div>
                    </div>
                  </div>

                  <div class="register-item-wrap">
                    <div class="register-item-text">官方网站：</div>
                    <div class="register-item-input">
                      <input ref="_v_url" type="text" name="url"/>
                      <div class="error-msg">填写官方网站</div>
                    </div>
                  </div>

                  <div class="register-item-wrap">
                    <div class="register-item-text">电商网址：</div>
                    <div class="register-item-input">
                      <input ref="_v_shop_url" type="text" name="shop_url"/>
                      <div class="error-msg">填写电商网址</div>
                    </div>
                  </div>
                </template>
                <template v-else-if="type==2">
                  <div class="register-item-wrap">
                    <div class="register-item-text">渠道性质：</div>
                    <div class="register-item-input radio">
                      <label><input type="radio" name="type" value="1" checked/>个人</label>
                      <label><input type="radio" name="type" value="2"/>公司</label>
                    </div>
                  </div>
                  <div class="register-item-wrap">
                    <div class="register-item-text"><span class="g2">*</span>渠道名称：</div>
                    <div class="register-item-input">
                      <input ref="v_name" type="text" name="name"/>
                      <div class="error-msg">填写渠道名称</div>
                    </div>
                  </div>
                  <div class="register-item-wrap">
                    <div class="register-item-text">渠道特点：</div>
                    <div class="register-item-input">
                      <textarea ref="_v_feature" name="feature"></textarea>
                    </div>
                  </div>
                </template>

                <div class="register-item-wrap">
                  <div class="register-item-text"><span class="g2">*</span>联系人：</div>
                  <div class="register-item-input">
                    <input ref="v_username" type="text" name="username"/>
                    <div class="error-msg">填写联系人</div>
                  </div>
                </div>

                <div class="register-item-wrap">
                  <div class="register-item-text"><span class="g2">*</span>手机号：</div>
                  <div class="register-item-input">
                    <input ref="v_tel" type="text" name="tel"/>
                    <div class="error-msg">填写手机号</div>
                  </div>
                </div>

                <div class="register-item-wrap">
                  <div class="register-item-text"><span class="g2">*</span>微信号：</div>
                  <div class="register-item-input">
                    <input ref="v_weixin" type="text" name="weixin"/>
                    <div class="error-msg">填写微信号</div>
                  </div>
                </div>
              </form>
            </div>

            <div class="register-item-wrap">
              <div class="register-item-text"></div>
              <div class="register-submit-wrap" :class="{on}" @click="submitData">
                <button type="button">提交</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'register',
    props: {
      type: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        on: false
      }
    },
    watch: {
      type () {
        $('.error-msg').hide()
      }
    },
    mounted () {
      var formFunction = this.getFormFunction()
      var _this = this;
      var registerBox = $('.register-wrap');
      registerBox.on('keyup blur focus', 'input,textarea', function (e) {
        if (e.originalEvent.type == 'focus') {
          _this['gydfbdfb_t'] && clearTimeout(_this['gydfbdfb_t']);
          _this['gydfbdfb_t'] = setTimeout(()=>{
            var offsetTop = $(this).offset().top - registerBox.find('>div').first().offset().top - 30;
            if( offsetTop>0 ){
              registerBox.scrollTop( offsetTop )
            }
          },300);
        }
        _this.timer && clearTimeout(_this.timer)
        _this.timer = setTimeout(() => {
          if ($(this).attr('name')) {
            var i = 'v_' + $(this).attr('name')
            if (formFunction[i] && _this.$refs[i] && i.substr(0, 2) == 'v_') {
              if (!formFunction[i].call(_this, _this.$refs[i])) {
                $(_this.$refs[i]).next().show()
              } else {
                $(_this.$refs[i]).next().hide()
              }
            }
            if( _this.verification( true ) ){
              _this.on = true;
            }else{
              _this.on = false;
            }
          }
        }, 300)
      })
    },
    methods: {
      close () {
        this.$emit('close')
      },
      verification ($not_show_msg) {
        var result
        var formFunction = this.getFormFunction()
        var validataResult = true
        for (var i in this.$refs) {
          if (formFunction[i] && this.$refs[i] && i.substr(0, 2) == 'v_') {
            result = formFunction[i].call(this, this.$refs[i])
            if (!result) {
              if( !$not_show_msg ){
                $(this.$refs[i]).next().show()
              }
              validataResult = false
            } else {
              $(this.$refs[i]).next().hide()
            }
          }
        }
        return validataResult
      },
      submitData () {
        if (this.verification()) {
          var url = this.type == 1 ? '/api/html/PostSupplier' : '/api/html/PostChannel'
          var formData = $(this.$refs['form-data']).serialize();
          if(this.submiting){
            return;
          }
          this.submiting = true;
          var ajax = $.get(url, formData, (repalyData) => {
            this.submiting = false;
            if (repalyData.resultCode == 0) {
              this.$toast('提交成功')
              this.close()
            } else {
              this.$toast(repalyData.errorMsg||'提交失败')
            }
          }, 'json');

        }
      },
      getFormFunction () {
        return {
          v_pname: function ($ref) {
            if ($($ref).val().replace(/^\s+|\s+$/g, '') == '') {
              return false
            }
            return true
          },
          v_feature: function ($ref) {
            if ($($ref).val().replace(/^\s+|\s+$/g, '') == '') {
              return false
            }
            return true
          },
          v_factory_name: function ($ref) {
            if ($($ref).val().replace(/^\s+|\s+$/g, '') == '') {
              return false
            }
            return true
          },
          v_url: function ($ref) {
            if (!/^https?\:\/\/.+/.test($($ref).val())) {
              return false
            }
            return true
          },
          v_shop_url: function ($ref) {
            if (!/^https?\:\/\/.+/.test($($ref).val())) {
              return false
            }
            return true
          },
          v_name: function ($ref) {
            if ($($ref).val().replace(/^\s+|\s+$/g, '') == '') {
              return false
            }
            return true
          },
          v_username: function ($ref) {
            if ($($ref).val().replace(/^\s+|\s+$/g, '').length < 2) {
              return false
            }
            return true
          },
          v_tel: function ($ref) {
            if (!/^1\d{10}$/.test($($ref).val())) {
              return false
            }
            return true
          },
          v_weixin: function ($ref) {
            if (!/^[\d\w\-]+$/.test($($ref).val())) {
              return false
            }
            return true
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../../../style/scss/helpers/functions";
  input, textarea, button {
    appearance: none;
    resize: none;
  }

  input:-webkit-autofill {
    box-shadow: inset 0 0 0 px2rem(1000) #E7DFCC;
  }

  .register-wrap {
    line-height: px2rem(33);
    background-color: rgba(255, 255, 255, 0.8);
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    /*display: flex;*/
    /*flex-direction: column;*/
    /*align-items: center;*/
    /*justify-content: center;*/
    transition: all .3s ease;
    overflow-y: scroll;

    .register-body {
      width: 100%;
      background: #FCF9F2;
      box-shadow: 0 px2rem(5) px2rem(14) 0 rgba(0, 0, 0, 0.20);
      position: relative;
    }
  }

  .register-header {
    text-align: left;
    background-color: #fff;
    line-height: px2rem(33);
    padding: px2rem(25) px2rem(30);
    position: relative;
    .t1 {
      color: #6C4607;
      font-size: px2rem(24);
    }
    .t2 {
      color: #6C4607;
      font-size: px2rem(24);
      font-weight: bold;
    }
  }

  .register-input-box {
    padding: px2rem(45) px2rem(45) px2rem(45) px2rem(25);
    .register-item-wrap {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: stretch;
      margin: px2rem(18) 0;
      border-radius: px2rem(5);
      overflow: hidden;
    }
    .register-item-text {
      color: #6C4607;
      font-size: px2rem(24);
      font-weight: 500;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-content: center;
      align-items: center;
      width: px2rem(150);
      text-align: right;
      .g2 {
        color: #F66039;
      }
    }
    .register-item-input {
      color: #6C4607;
      background-color: #E7DFCC;
      flex: 1;
      padding: px2rem(12) px2rem(20);
      position: relative;
      input, textarea {
        outline: none;
        border: none;
        background-color: transparent;
        display: block;
        width: 100%;
        line-height: px2rem(33);
        font-size: px2rem(24);
        color: #6C4607;
      }
      textarea {
        height: px2rem(150);
      }
      &.radio {
        background: transparent;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding-left: 0;
      }
    }
    .register-submit-wrap {
      user-select: none;
      background-color: #E7DFCC;
      &.on {
        background-color: #F66039;
      }
      button[type=button] {
        padding: px2rem(12) px2rem(20);
        color: #fff;
        font-size: px2rem(24);
        background-color: transparent;
        width: px2rem(230);
        border: none;
        outline: none;
      }
    }
  }

  .register-close {
    width: px2rem(80);
    height: px2rem(80);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: px2rem(10);
    top:50%;
    transform: translateY(-50%);
    img {
      width: px2rem(30);
    }
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter,
  .modal-leave-active {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .radio {
    label {
      position: relative;
      display: block;
      overflow: hidden;
      padding-left: px2rem(40);
      margin-right: px2rem(10);
    }
    input[type=radio] {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);

      &:after {
        content: '';
        display: block;
        width: px2rem(30);
        height: px2rem(30);
        background: #E7DFCC;
        border-radius: px2rem(7);
      }

      &:checked:after {
        background-image: url(../../style/images/icon-radio.svg);
        background-position: center center;
        background-size: px2rem(16) auto;
        background-repeat: no-repeat;
      }
    }
  }

  .error-msg {
    position: absolute;
    right: px2rem(15);
    top: 50%;
    transform: translateY(-50%);
    color: #F66039;
    font-size: px2rem(24);
    display: none;
  }
</style>
