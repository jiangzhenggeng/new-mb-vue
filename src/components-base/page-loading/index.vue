<template>
  <div v-if="inner_show" class="page-loading">
    <img class="page-loading-img" src="./page-loading.svg"/>
  </div>
</template>

<script>
	import stopPreventdefault from '../stop-preventdefault'

	export default {
		name: 'PageLoading',
		mixins: [stopPreventdefault],
		props: {
			show: {
				type: Boolean,
				default: 'scsc'
			}
		},
		data() {
			return {
				inner_show: this.show
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

  .page-loading {
    position: fixed;
    z-index: 99999999;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #fff;
  }

  .page-loading-img {
    $loading-width: px2rem(80);
    position: absolute;
    z-index: 9999;
    top: 50%;
    left: 50%;
    margin-left: -$loading-width/2;
    margin-top: -$loading-width/2;
    width: $loading-width;
    height: $loading-width;
  }
</style>