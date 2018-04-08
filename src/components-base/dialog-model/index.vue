<style lang="less">
  .dialog-model-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    overflow: hidden;
    .dialog-modal-inner {
      width: 100%;
      height: 100%;
      animation: dialog-modal-zoom .3s;
    }
  }
  @import "./dialog-animate";

</style>
<template>
  <transition name="dialog-model">
    <div
      v-if="inner_show"
      class="dialog-model-wrap"
      :style="`z-index:${innerzIndex};${customStyle}`"
    >
      <div class="dialog-modal-inner">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
	import stopPreventdefault from '../stop-preventdefault'
	import zIndexMarge from '../../common/z-index-marge'

	export default {
		name: 'DialogModel',
		mixins: [stopPreventdefault],
		props: {
			show: {
				type: Boolean,
				default: false
			},
			customStyle: {
				type: String,
				default: ''
			},
			animate: {
				type: Boolean,
				default: true
			},
			zIndex: {
				type: Number,
				default: zIndexMarge()
			}
		},
		data() {
			return {
				inner_show: this.show
			}
		},
		computed: {
			innerzIndex() {
				return this.zIndex
			}
		},
		methods: {
			open() {
				this.inner_show = true
				return this
			},
			close() {
				this.inner_show = false
				return this
			}
		},
		watch: {
			show(newVal) {
				this.inner_show = newVal
			},
			inner_show(newVal) {
				if (newVal) {
					this.stopScrollEventHandler = this.stopScrollEvent()
				} else if (typeof this.stopScrollEventHandler == 'function') {
					this.stopScrollEventHandler()
				}
			}
		}
	}
</script>

<style lang="scss">
  @import "../../style/scss/helpers/functions";


</style>