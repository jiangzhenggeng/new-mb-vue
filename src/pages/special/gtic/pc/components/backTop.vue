<template>
  <transition name="bt">
    <a class="backTop" v-if="!scrollTopFlag" href="javascript:;" @click.prevent="scrollToTop">
      <img src="../assets/images/top.png" alt="">
    </a>
  </transition>
</template>

<script>
	import bus from '../assets/js/bus'
  import $ from 'jquery'

	export default {
		data() {
			return {
				scrollTopFlag: true
			}
		},
		created() {
			this.scrollEvent()
		},
		methods: {
			scrollToTop() {
				$('html,body').animate({scrollTop: 0}, 160)
			},
			scrollEvent() {
				bus.$on('scrollTop', (message) => {
					if (message.scrollTop > 50) {
						this.scrollTopFlag = false
					} else {
						this.scrollTopFlag = true
					}
				})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .backTop {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 72px;
    height: 80px;
    background: linear-gradient(#555, #000);
    border-radius: 4px 0 0 4px;
    position: fixed;
    right: 0;
    box-sizing: border-box;
    bottom: 100px;
    img {
      width: 25px;
    }
  }

  .bt-enter-active, .bt-leave-active {
    transition: opacity .5s;
  }

  .bt-enter, .bt-leave-to {
    opacity: 0;
  }
</style>
