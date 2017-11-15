<style lang="scss">
  @import "./../bind/static/button.scss";
  @import "./../bind/static/form-row.scss";

  .password__find {
    .password__step-wrap {
      padding: 0 px2rem(50);
      margin: px2rem(35) 0 0;
      position: relative;
    }
    .password__form {
      padding: px2rem(40) px2rem(24);
    }
    .validatecode {
      img {
        height: px2rem(80);
      }
    }
    .tel-validatecode {
      .button {
        height: px2rem(88);
        font-size: px2rem(28);
      }
    }
    .w250 {
      width: px2rem(250);
    }
  }
</style>
<template>
  <div class="content-wrap">
    <page-header-back @back="back('/mb/user/login.html')" title="注册极果"/>
    <div class="page__body password__find">
      <div class="password__step-wrap">
        <password-step :step="1" last-text="完善信息"/>
      </div>
      <div class="password__form">
        <div class="login__form-ctr">
          <div class="form__row">
            <label class="form__cell">
              <i class="icon-v2 icon-v2-username left">
                <img src="./../bind/static/icon/phone.png"/>
              </i>
              <input type="text" name="tel" v-model="tel" ref="login-tel" placeholder="手机" autocomplete="off"/>
              <i @click="clearInputContent('tel')" v-if="tel" class="icon-v2 icon-v2-clear-input right">
                <img src="./../bind/static/icon/clear-close.svg"/>
              </i>
            </label>
          </div>
          <div class="form__row">
            <label class="form__cell">
              <i class="icon-v2 icon-v2-password left">
                <img src="./../bind/static/icon/password.png"/>
              </i>
              <input type="text" name="vcode" v-model="vcode" ref="login-vcode" placeholder="图片校验码"
                     autocomplete="off"/>
              <i @click="clearInputContent('vcode')" v-if="vcode" class="icon-v2 icon-v2-clear-input right">
                <img src="./../bind/static/icon/clear-close.svg"/>
              </i>
            </label>
            <div class="validatecode w250 mgl10">
              <img
                @click="changeValidataCode($event)"
                alt="看不清？点击更换另一个验证码"
                :src="USER_VAR_CONFIG.registerCode"
              />
            </div>
          </div>
          <div class="form__row tel-validatecode">
            <label class="form__cell">
              <i class="icon-v2 icon-v2-password left">
                <img src="./../bind/static/icon/password.png"/>
              </i>
              <input type="text" name="code" v-model="code" ref="login-code" placeholder="手机验证码"
                     autocomplete="off"/>
              <i @click="clearInputContent('code')" v-if="code" class="icon-v2 icon-v2-clear-input right">
                <img src="./../bind/static/icon/clear-close.svg"/>
              </i>
            </label>
            <div class="w250 mgl10">
              <send-code :postData="{tel,vcode}" url="/api/validation/tel" />
            </div>
          </div>

        </div>

        <div class="mgt20">
          <div class="form__row">
            <button @click="submitForm" type="button" class="button">下一步</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import PageHeaderBack from '@/components/header-back.vue'
  import PasswordStep from './../passwd/components/step.vue'
  import SendCode from './../bind/components/send-code.vue'
  import mixins from './../bind/mixins'

  export default {
    mixins: [mixins],

    data () {
      return {
        tel: '',
        vcode: '',
        code: ''
      }
    },
    components: {
      PageHeaderBack,
      PasswordStep,
      SendCode
    },
    methods: {
      submitForm () {
        if (!this.validatemobile(this.tel)) {
          this.$refs['login-tel'].focus()
          return
        }

        if (!this.vcode) {
          this.$alert('请输入图片校验码')
          this.$refs['login-vcode'].focus()
          return
        }

        if (!this.code) {
          this.$alert('请输入手机验证码')
          this.$refs['login-code'].focus()
          return
        }

        if (this.timer) {
          return
        }
        this.timer = true

        $.post('/api/validation/code', {
          tel: this.tel,
          vcode: this.vcode,
          code: this.code
        }, repalyData => {
          this.timer = false
          if (repalyData == 1) {
            this.$router.push({
              path: '/mb/user/set-passwd.html'
            })
          } else {
            this.$alert(repalyData || '验证失败')
          }
        })
      },
      changeValidataCode (event) {
        event.target.src = event.target.src.split('?')[0] + '?_=' + (+new Date())
      }
    }
  }
</script>
