<style lang="scss">
  @import "./../bind/static/password.scss";
</style>
<template>
  <div class="content-wrap password__find">
    <page-header-back @back="back('/mb/userv2/bind')">
      <div slot="title">设置密码</div>
    </page-header-back>
    <div class="page__body password__form">
      <div class="login__form-ctr">
        <div class="form__row">
          <label class="form__cell">
            <i class="icon-v2 icon-v2-password left">
              <img src="./../bind/static/icon/password.png"/>
            </i>
            <input type="password" name="" v-model="passwd1" ref="set-passwd1" placeholder="请输入密码" autocomplete="off"/>
            <i @click="clearInputContent('passwd1')" v-if="passwd1" class="icon-v2 icon-v2-clear-input right">
              <img src="./../bind/static/icon/clear-close.svg"/>
            </i>
          </label>
        </div>
        <div class="form__row tel-validatecode">
          <label class="form__cell">
            <i class="icon-v2 icon-v2-password left">
              <img src="./../bind/static/icon/password.png"/>
            </i>
            <input type="password" name="" v-model="passwd2" ref="set-passwd2" placeholder="请重复密码" autocomplete="off"/>
            <i @click="clearInputContent('passwd2')" v-if="passwd2" class="icon-v2 icon-v2-clear-input right">
              <img src="./../bind/static/icon/clear-close.svg"/>
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
    <loading-window ref="loading-window"></loading-window>
  </div>
</template>

<script>
  import $ from 'jquery'
  import PageHeaderBack from '@/components/header-back.vue'
  import mixins from './../bind/mixins'
  import LoadingWindow from '@/components/window/loading.vue'

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
      LoadingWindow
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
        if (this.passwd1 !== this.passwd2) {
          this.$refs['set-passwd1'].focus()
          this.$alert('两次密码不符')
          return
        }
        if (this.timer) return

        this.timer = true
        this.__timer_ajax__ && clearTimeout(this.__timer_ajax__);

        this.$refs['loading-window'].show();
        var ajax = $.post('/api/user/MergeUserTel', {
          passwd: this.passwd1,
          repasswd: this.passwd2
        }, repalyData => {
          if (repalyData.result.status == 1) {
            if( repalyData.result.url ){
              window.location = repalyData.result.url
            }else{
              window.location = '/'
            }
          } else {
            this.$alert(repalyData.result.message || '设置失败')
          }
        },'json').always(() => {
          this.timer = false
          this.$refs['loading-window'].close()
        })

        this.__timer_ajax__ = setTimeout(()=>{
          ajax.abort && ajax.abort();
          this.$refs['loading-window'].close();
        },10000);
      }
    }
  }
</script>
