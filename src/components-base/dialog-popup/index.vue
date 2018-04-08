<template>
  <transition name="dialog-model">
    <div
      class="dialog-popup-wrap"
      v-if="show"
      :style="`z-index:${zIndex}`"
    >
      <div
        :class="['modal-wrap-inner',closeBtn?'has-close':'']"
        :style="customStyle"
      >
        <div
          v-if="closeBtn"
          class="modal-wrap-close btn-active"
          @click="_closeDialogPopup"
        />
        <div class="modal-wrap-body">
          <slot>{{message}}</slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
	import mixins from '../dialog-alert/mixins'

	export default {
		name: 'DialogPopup',
		mixins: [mixins],
		data() {
			return {
				//是否有关闭按钮
				closeBtn: true,
				message: '消息Popup'
			}
		},
		methods: {
			_closeDialogPopup() {
				this.close()
				this.$emit('close')
			}
		}
	}
</script>
<style lang="scss">
  @import "../../style/scss/helpers/functions";
  @import "../dialog-model/dialog-animate.less";

  .dialog-popup-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.3);

    .modal-wrap-inner {
      position: relative;
      background: #fff;
      width: 75%;
      padding: px2rem(30);
      border-radius: px2rem(10);
      overflow: hidden;
      animation: dialog-modal-zoom .3s;

      &.has-close {
        padding-top: px2rem(40);
      }
    }
    .modal-wrap-close {
      position: absolute;
      right: px2rem(0);
      top: px2rem(0);
      width: px2rem(50);
      height: px2rem(50);
      background-image: url(./close_64.svg);
      background-size: px2rem(42) auto;
      background-position: center center;
      background-repeat: no-repeat;

      padding: px2rem(20);
    }

    .modal-wrap-body {

    }
  }
</style>