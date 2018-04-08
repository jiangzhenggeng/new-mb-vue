<template>
  <transition name="dialog-model">
    <div
      v-if="show"
      class="dialog-alert-wrap"
      :style="`z-index:${zIndex}`"
    >
      <div class="dialog-alert-inner">
        <div class="dialog-alert-content">
          <slot name="message">{{message}}</slot>
        </div>
        <div class="dialog-loading-btn-wrap">
          <slot name="button">
            <div
              v-if="buttonCancelText"
              @click="_tapCancel"
              class="dialog-loading-btn cancel btn-active"
              :style="buttonCancelStyle"
            >
              {{buttonCancelText}}
            </div>
            <div
              v-if="buttonOkText"
              @click="_tapOk"
              class="dialog-loading-btn ok btn-active"
              :style="buttonOkStyle"
            >
              {{buttonOkText}}
            </div>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
	import mixins from './mixins'

	export default {
		name: 'DialogAlert',
		mixins: [mixins],
		data() {
			return {
				message: '消息Alert',
				buttonOkText: 'ok',
				buttonCancelText: 'cancel',
				buttonCancelStyle: '',
				buttonOkStyle: ''
			}
		},
		methods: {
			_tapCancel() {
				this.$emit('cancel')
				this.close()
			},
			_tapOk() {
				this.$emit('ok')
				this.close()
			},
			okText(buttonOkText) {
				this.buttonOkText = buttonOkText
				return this
			},
			okStyle(buttonOkStyle) {
				this.buttonOkStyle = buttonOkStyle
				return this
			},
			cancelText(buttonCancelText) {
				this.buttonCancelText = buttonCancelText
				return this
			},
			cancelStyle(buttonCancelStyle) {
				this.buttonCancelStyle = buttonCancelStyle
				return this
			}
		}
	}
</script>
<style lang="scss">
  @import "../../style/scss/helpers/functions";
  @import "../dialog-model/dialog-animate.less";

  .dialog-alert-wrap {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;

    .dialog-alert-inner {
      background: rgba(255, 255, 255, 1);
      border-radius: px2rem(10);
      overflow: hidden;

      box-sizing: border-box;
      width: 80%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      animation: dialog-modal-zoom .3s;

    }

    .dialog-alert-content {
      flex: 1;
      width: 100%;

      padding: px2rem(30);
      color: #333;
      font-size: px2rem(28);
      min-height: px2rem(120);
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
    }
    .dialog-loading-btn-wrap {
      flex: 1;

      width: 100%;
      height: px2rem(85);

      color: #333;
      font-size: px2rem(28);
      text-align: center;

      display: flex;
      align-items: stretch;
      justify-content: space-between;

      position: relative;

      &:after {
        position: absolute;
        content: '';
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 1px;
        background: #D8D8D8;
      }

      .dialog-loading-btn {
        min-width: 50%;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        box-sizing: border-box;
        cursor: pointer;

        &:nth-child(2n):after {

          position: absolute;
          content: '';
          display: block;
          left: 0;
          top: 0;
          width: px2rem(2);
          height: 100%;
          background: #ccc;

        }
      }
    }
  }

</style>