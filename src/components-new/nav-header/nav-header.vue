<template>
  <header class="header header-wrap">
    <div class="header header-inner">
      <div class="menu">
        <div @click="openMenu" class="menu__open btn-active">
          <i class="icon icon-menu"></i>
        </div>
      </div>
      <div class="logo">
        <a @click="clearCacheData" href="/">
          <img src="../../style/images/logo.png"/>
        </a>
      </div>
      <div class="header-right">
        <template v-if="search">
          <a @click="searchRecodCurrUrl" class="search btn-active" href="/mb/search/list.html">
            <i class="icon icon-search"/>
          </a>
        </template>
        <template v-if="user">
          <a v-if="isLogin" class="user has-login btn-active" href="/mb/user/index.html">
            <div class="header-right-badge-wrap">
              <div class="user-innner">
                <img :src="userFace"/>
              </div>
              <em
                v-if="hasMessage"
                :class="['badge',{'number':ioMessageNumber}]"
                v-html="ioMessageNumber"
              />
            </div>
          </a>
          <a v-else class="user fl pos-rel btn-active" href="/mb/user/index.html">
            <i class="icon icon-user"/>
          </a>
        </template>
      </div>
    </div>
  </header>
</template>

<script>
	import cookie from 'js-cookie'
	import io from 'socket.io-client'
	import store from 'store'

	export default {
		props: {
			curr: {
				type: String,
				default: 'index'
			},
			search: {
				type: Boolean,
				default: true
			},
			user: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				show: false,
				hasMessage: false,
				ioMessageNumber: 0
			}
		},
		computed: {
			isLogin() {
				return window.URL && window.URL['login']
			},
			userFace() {
				return this.isLogin ? window.URL['user-face'] : ''
			}
		},
		mounted() {
			if (
				!('messageIo' in window) &&
				window.URL &&
				window.URL['uid'] &&
				window.URL['ioid']
			) {
				window.messageIo = true
				this.$nextTick(() => {
					this.pushNotification(window.URL['ioid'])
				})
			}
		},
		methods: {
			openMenu() {
				this.$emit('menu:open')
			},
			clearCacheData() {
				store.clearAll()
			},
			searchRecodCurrUrl() {
				cookie.set('isSearchCurrUrl', window.location.href, {path: '/'})
			},
			pushNotification(userssid) {
				var socket
				// 连接服务端
				if (process.env.NODE_ENV == 'production') {
					socket = io('http://io.jiguo.com:2126')
				} else {
					socket = io('http://msg.jiguo.com:2126')
				}
				// 连接后登录
				socket.on('connect', function () {
					socket.emit('login', userssid)
				})
				// 后端推送来消息时
				socket.on('h5-news', msg => {
					eval('msg = ' + msg)
					if (msg != null) {
						if (msg.type == 'news') {
							//消息
							if (typeof(msg.num) != 'undefined' && parseInt(msg.num) > 0) {
								// 显示数字
								this.hasMessage = true
								this.ioMessageNumber = msg.num
							} else if (parseInt(msg.num) == 0 && typeof (msg.tips) != 'undefined' && parseInt(msg.tips) > 0) {
								// 显示点
								this.hasMessage = true
								this.ioMessageNumber = 0
							} else {
								this.hasMessage = false
								this.ioMessageNumber = 0
							}
						} else if (msg.type == 'broadcast') {

							this.hasMessage = !!msg.tips
							this.ioMessageNumber = msg.tips || 0

						}
					}
				})
			}
		}
	}
</script>
<style lang="scss">
  @import "../../style/scss/helpers/functions";

  .header-wrap {
    .icon {
      display: flex !important;
    }
  }

  $height: px2rem(104);
  .header {
    background: #fff;
    position: relative;
    height: $height;
    z-index: 5;
  }

  .header-inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    position: fixed;
    border-bottom: px2rem(1) solid #ececec;
    box-sizing: border-box;
    width: 100%;
    top: 0;
    left: 0;
  }

  .logo {
    flex: 1;
    text-align: center;
    a {
      display: block;
      line-height: $height;
    }
    img {
      display: inline-block;
      vertical-align: middle;
      height: px2rem(70);
    }
  }

  .menu,
  .header-right {
    position: relative;
    z-index: 2;
    min-width: $height * 2;
  }

  .menu {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    z-index: 3;
    .menu__open {
      width: $height;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .icon-menu {
      width: $height/1.5 !important;
      height: $height/1.5 !important;
    }
  }

  .header-right {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    flex-grow: 0;
    flex-shrink: 0;
    > a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: $height;
    }
    .user-innner {
      border-radius: 50%;
      overflow: hidden;
      width: px2rem(64);
      height: px2rem(64);
    }
    img {
      width: 100%;
    }
  }

  .header-right-badge-wrap {
    position: relative;
    margin-right: px2rem(15);
    display: flex !important;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    .user-innner img {
      display: block;
    }
  }
</style>