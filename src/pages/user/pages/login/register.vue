<style lang="less">
  @import "./static/button.less";
  @import "./static/form-row.less";

  .password__find {
    .password__step-wrap {
      padding: 0 50px;
      margin: 35px 0 0;
      position: relative;
    }
    .password__form {
      padding: 40px 24px;
    }
    .validatecode {
      img {
        height: 80px;
      }
    }
    .tel-validatecode {
      .button {
        height: 88px;
        font-size: 28px;
      }
    }
    .w250 {
      width: 250px;
    }
  }
</style>
<template>
  <div class="page">
    <page-header-back @back="back('/mb/user/login')" title="注册极果"/>
    <div class="content-wrap password__find">
      <div class="password__step-wrap">
        <password-step :step="1" last-text="完善信息"/>
      </div>
      <div class="password__form">
        <div class="login__form-ctr">
          <div class="form__row">
            <label class="form__cell">
              <i class="icon-v2 icon-v2-username left">
                <img src="./static/icon/phone.png"/>
              </i>
              <input type="text" name="tel" v-model="tel" ref="login-tel" placeholder="手机" autocomplete="off"/>
              <i @click="clearInputContent('tel')" v-if="tel" class="icon-v2 icon-v2-clear-input right">
                <img src="./static/icon/clear-close.svg"/>
              </i>
            </label>
          </div>
          <div class="form__row">
            <label class="form__cell">
              <i class="icon-v2 icon-v2-password left">
                <img src="./static/icon/password.png"/>
              </i>
              <input type="text" name="vcode" v-model="vcode" ref="login-vcode" placeholder="图片校验码"
                     autocomplete="off"/>
              <i @click="clearInputContent('vcode')" v-if="vcode" class="icon-v2 icon-v2-clear-input right">
                <img src="./static/icon/clear-close.svg"/>
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
                <img src="./static/icon/password.png"/>
              </i>
              <input type="text" name="code" v-model="code" ref="login-code" placeholder="手机验证码"
                     autocomplete="off"/>
              <i @click="clearInputContent('code')" v-if="code" class="icon-v2 icon-v2-clear-input right">
                <img src="./static/icon/clear-close.svg"/>
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
  import PasswordStep from './components/step.vue'
  import SendCode from './components/send-code.vue'
  import mixins from './mixins'

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
