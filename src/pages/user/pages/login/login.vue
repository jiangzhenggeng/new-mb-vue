<style lang="scss">
  @import "./../../../../style/scss/helpers/functions";
  @import "./static/button.scss";
  @import "./static/form-row.scss";

  .login__wrap {
    padding: px2rem(24);
    color: #a0a0a0;
    font-size: px2rem(28);

    .login__tips {
      text-align: center;
      padding: px2rem(30);
      font-size: px2rem(32);
    }

    .login__type-wrap {
      ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    }

    .login__type-wrap {
      width: px2rem(560);
      margin: auto;
      text-align: center;
    }

    .login__weixin {
      width: px2rem(100);
      height: px2rem(100);
      img {
        width: 100%;
      }
    }

    .login__type-name {
      color: #a0a0a0;
      margin-top: px2rem(15);
    }

    .login__forget {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: px2rem(30);
      margin-top: px2rem(30);
      padding: 0 px2rem(30);
      a {
        color: #65abd0;
      }
    }
  }
</style>

<template>
  <div class="content-wrap">
    <page-header curr="index"/>
    <div class="page__body login__wrap">
      <div class="login__row">
        <div class="login__tips">使用社交账号登录</div>
        <div class="login__type-wrap">
          <ul>
            <li>
              <div class="avt">
                <a :href="USER_VAR_CONFIG.wxLoginUrl">
                  <div class="login__weixin">
                    <img src="./static/icon/weixin.png"/>
                  </div>
                  <div class="login__type-name">微信</div>
                </a>
              </div>
            </li>
            <li>
              <div class="avt">
                <a :href="USER_VAR_CONFIG.qqLoginUrl">
                  <div class="login__weixin">
                    <img src="./static/icon/qq.png"/>
                  </div>
                  <div class="login__type-name">QQ</div>
                </a>
              </div>
            </li>
            <li>
              <div class="avt">
                <a :href="USER_VAR_CONFIG.weiboLoginUrl">
                  <div class="login__weixin">
                    <img src="./static/icon/weibo.png"/>
                  </div>
                  <div class="login__type-name">新浪微博</div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="login__row mgt20">
        <div class="login__tips">使用极果账号登录</div>
        <div class="login__form">
          <form action="/mb/user/login" method="post">
            <div class="login__form-ctr">
              <div class="form__row">
                <label class="form__cell">
                  <i class="icon-v2 icon-v2-username left">
                    <img src="./static/icon/phone.png"/>
                  </i>
                  <input type="text" name="" v-model="tel" ref="login-tel" placeholder="手机号" autocomplete="off"/>
                  <i @click="clearInputContent('tel')" class="icon-v2 icon-v2-clear-input right" v-if="tel">
                    <img src="./static/icon/clear-close.svg"/>
                  </i>
                </label>
              </div>
              <div class="form__row">
                <label class="form__cell">
                  <i class="icon-v2 icon-v2-password left">
                    <img src="./static/icon/password.png"/>
                  </i>
                  <input type="password" name="" v-model="passwd" ref="login-passwd" placeholder="密码" autocomplete="off"/>
                  <i @click="clearInputContent('passwd')" class="icon-v2 icon-v2-clear-input right" v-if="passwd">
                    <img src="./static/icon/clear-close.svg"/>
                  </i>
                </label>
              </div>
            </div>
            <div class="mgt20">
              <div class="form__row">
                <button @click="submitForm" type="button" class="button">登录</button>
              </div>
              <div class="login__forget">
                <div class="login__forget-cell">
                  <router-link to="/mb/user/passwd.html">忘记密码？</router-link>
                </div>
                <div class="login__forget-cell">
                  <router-link to="/mb/user/register/t/1.html">立即注册</router-link>
                </div>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import $ from 'jquery'
  import PageHeader from '@/components/header.vue'
  import mixins from './mixins'

  export default {
    mixins: [mixins],
    data () {
      return {
        tel: '',
        passwd: ''
      }
    },
    mounted () {
      this.hidePageLoading()
    },
    components: {
      PageHeader
    },
    methods: {
      submitForm () {
        if (!this.validatemobile(this.tel)) {
          return
        }
        if (!this.passwd.length) {
          this.$alert('请输入密码')
          return
        }
        if(this.timer) return
        this.timer = true;
        $.post('/mb/ajax/login.html', {
          tel: this.tel,
          passwd: this.passwd
        }, repalyData => {
          this.timer = false;
          if (repalyData == 1) {
            this.$router.push({
              path: '/mb/index/index.html'
            })
          } else {
            this.$alert(repalyData || '登录失败')
          }
        })
      },
      ...mapActions(['hidePageLoading'])
    }
  }
</script>
