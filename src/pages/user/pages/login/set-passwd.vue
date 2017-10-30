<style lang="less">
  @import "./static/password.less";
</style>
<template>
  <div class="page">
    <page-header-back @back="back('/mb/user/passwd')" title="修改密码"/>
    <div class="content-wrap password__find">
      <div class="password__step-wrap">
        <password-step :step="2"/>
      </div>
      <div class="password__form">
        <div class="login__form-ctr">
          <div class="form__row">
            <label class="form__cell">
              <i class="icon-v2 icon-v2-password left">
                <img src="./static/icon/password.png"/>
              </i>
              <input type="password" name="" v-model="passwd1" ref="set-passwd1" placeholder="请输入密码" autocomplete="off"/>
              <i @click="clearInputContent('passwd1')" v-if="passwd1" class="icon-v2 icon-v2-clear-input right">
                <img src="./static/icon/clear-close.svg"/>
              </i>
            </label>
          </div>
          <div class="form__row tel-validatecode">
            <label class="form__cell">
              <i class="icon-v2 icon-v2-password left">
                <img src="./static/icon/password.png"/>
              </i>
              <input type="password" name="" v-model="passwd2" ref="set-passwd2" placeholder="请重复密码" autocomplete="off"/>
              <i @click="clearInputContent('passwd2')" v-if="passwd2" class="icon-v2 icon-v2-clear-input right">
                <img src="./static/icon/clear-close.svg"/>
              </i>
            </label>
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
  import mixins from './mixins'

  export default {
    mixins: [mixins],
    data () {
      return {
        passwd1: '',
        passwd2: ''
      }
    },
    components: {
      PageHeaderBack,
      PasswordStep
    },
    methods: {
      submitForm () {

        if (!this.passwd1.length) {
          this.$refs['set-passwd1'].focus()
          this.$alert('密码不能为空')
          return
        }
        if (!this.passwd2.length) {
          this.$refs['set-passwd2'].focus()
          this.$alert('重复密码不能为空')
          return
        }
        if (this.passwd1!==this.passwd2) {
          this.$refs['set-passwd1'].focus()
          this.$alert('两次密码不符')
          return
        }
        if(this.timer) return;

        this.timer = true;
        $.post('/mb/user/passwd', {
          passwd1: this.passwd1,
          passwd2: this.passwd2
        }, repalyData => {
          this.timer = false;
          if (repalyData == 1) {
            this.$router.push({
              path: '/mb/user/index'
            })
          } else {
            this.$alert(repalyData || '设置失败')
          }
        })
      }
    }
  }
</script>
