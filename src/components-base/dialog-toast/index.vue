<style lang="scss">
  @import "../../style/scss/helpers/functions";

  .dialog-toast-wrap {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);

    &.bottom {
      bottom: px2rem(150);
    }
    &.top {
      top: px2rem(150);
    }
    &.center {
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    .dialog-toast-box {
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
      font-size: px2rem(28);
      text-align: center;
      padding: px2rem(15) px2rem(30);
      border-radius: px2rem(10);
      animation: dialog-toast .3s;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &.small {
        padding: px2rem(30) px2rem(50);
        min-width: px2rem(180);
      }
      &.larg {
        min-height: px2rem(240);
        min-width: px2rem(240);
      }
    }

    .dialog-toast-icon {
      width: px2rem(72);
      height: px2rem(72);
      .image {
        width: 100%;
        height: 100%;
      }
      + .dialog-toast-text {
        margin-top: px2rem(20);
      }
    }
  }

  .dialog-toast-mask {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 99999;
    left: 0;
    top: 0;
  }

  @keyframes dialog-toast {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
<template>
  <transition name="dialog-toast">
    <div
      v-if="show"
      class="dialog-toast-wrap-fok"
      :style="`z-index:${zIndex};${style}`"
    >
      <div
        v-if="mask"
        class="dialog-toast-mask"
        :style="`z-index:${zIndex};`"
      />
      <div
        :class="['dialog-toast-wrap',position]"
        :style="`z-index:${zIndex+1};`"
      >
        <div :class="['dialog-toast-box',size]">
          <div class="dialog-toast-icon" v-if="icon">
            <img class="image" :src="iconImage"/>
          </div>
          <div v-if="message" class="dialog-toast-text">
            <ellipsis-line :line="2">
              <span>{{message}}</span>
            </ellipsis-line>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
	import loadingIcon from './icon-loading.svg'
	import warnIcon from './icon-warn.svg'
	import errorIcon from './icon-error.svg'
	import successIcon from './icon-success.svg'

	import ellipsisLine from '../ellipsis-line/ellipsis-line'
	import zIndexMarge from '../../common/z-index-marge'


	export default {
		name: 'DialogToast',
		data() {
			return {
				show: false,
				message: '',
				time: 3000,
				size: 'larg',
				position: 'center',
				icon: 'warn',
				mask: false,
				style: ''
			}
		},
		computed: {
			iconImage() {
				switch (this.icon) {
					case 'loading':
						return loadingIcon
					case 'error':
						return errorIcon
					case 'success':
						return successIcon
					case 'warn':
						return warnIcon
				}
			},
			zIndex() {
				return zIndexMarge()
			}
		},
		components: {
			ellipsisLine
		},
		watch: {
			show(newVal) {
				if (this.setTimeoutHandler) {
					clearTimeout(this.setTimeoutHandler)
				}
				if (newVal) {
					this.setTimeoutHandler = setTimeout(() => {
						this.show = false
						this.$nextTick(() => {
							this._callback && this._callback.call(this)
							this._callback && delete this._callback
						})
					}, this.time)
				}
			}
		},
		methods: {
			open() {
				this.show = true
				this.$emit('open')
				return this
			},
			close() {
				this.show = false
				this.$emit('close')
				return this
			},
			setMessage(message) {
				this.message = message
				return this
			},
			setTime(time) {
				this.time = time
				return this
			},
			setSize(size) {
				this.size = size
				return this
			},
			setIcon(icon) {
				this.icon = icon
				return this
			},
			setMask(mask) {
				this.mask = mask
				return this
			},
			setPosition(position) {
				this.position = position
				return this
			},
			setCallback(callback) {
				this._callback = callback || function () {

				}
				return this
			}
		},
		beforeDestroy() {
			if (this.setTimeoutHandler) {
				clearTimeout(this.setTimeoutHandler)
			}
		}
	}
</script>