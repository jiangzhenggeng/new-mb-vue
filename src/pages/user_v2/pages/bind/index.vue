<style lang="scss">
  $IMAGES_PATH: './../../../../style/images/';
  @import "./../../../../style/scss/helpers/functions";
  @import "./static/button.scss";
  @import "./static/form-row.scss";

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
  <div class="content-wrap password__find">
    <page-header-back @back="back">
      <div slot="title">绑定手机号</div>
    </page-header-back>
    <div class="page__body user__center">

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
                :src="USER_VAR_CONFIG.bindCode"
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
              <send-code :postData="{tel,vcode}" url="/api/validation/tel"/>
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
    <loading-window ref="loading-window"></loading-window>
  </div>
</template>

<script>
  import $ from 'jquery'
  import { mapActions, mapState } from 'vuex'
  import PageHeaderBack from '@/components/header-back.vue'
  import SendCode from './components/send-code.vue'
  import mixins from './mixins'
  import LoadingWindow from '@/components/window/loading.vue'

  export default {
    mixins: [mixins],
    data () {
      return {
        tel: '',
        vcode: '',
        code: ''
      }
    },
    mounted () {
      this.hidePageLoading()
    },
    computed: {
      ...mapState({
        show: state => state.show,
      })
    },
    components: {
      PageHeaderBack,
      SendCode,
      LoadingWindow
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
        this.$refs['loading-window'].show();
        $.post('/api/user/CheckoutTel', {
          tel: this.tel,
          vcode: this.vcode,
          code: this.code
        }, repalyData => {
          this.timer = false
          this.$refs['loading-window'].close();
          //没有注册，跳转到填写密码
          if (repalyData.result.status == 1) {
            this.$router.push({
              path: '/mb/userv2/setpassword.html'
            })
          } else if (repalyData.result.status == 2) {
            //已有账号，跳转到合并账号页面
            this.$router.push({
              path: '/mb/userv2/mergetel.html'
            })
          } else if (repalyData.result.status == -1) {
            if (repalyData.result.url) {
              window.location = repalyData.result.url
            } else {
              this.$alert(repalyData.result.message || '验证失败')
            }
          } else {
            this.$alert(repalyData.result.message || '验证失败')
          }
        }, 'json')
      },
      changeValidataCode (event) {
        event.target.src = event.target.src.split('?')[0] + '?_=' + (+new Date())
      },
      ...mapActions(['hidePageLoading'])
    }
  }
</script>
