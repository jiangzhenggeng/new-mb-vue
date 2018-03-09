<template>
  <div class="page">
    <loading v-show="show"/>
    <div class="content-wrap ft">
      <canvas1 />
    </div>
  </div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	import Test from './Test.vue'
	import Canvas1 from './canvas/canvas-1.vue'

	export default {
		mounted() {
			this.hidePageLoading()
			this.$createAip(Test).show()
		},
		computed: {
			...mapState([
				'show'
			])
		},
		components: {
			Canvas1
		},
		methods: {
			...mapActions(['hidePageLoading'])
		}
	}
</script>



