<style lang="scss">
  @import "../../../style/scss/helpers/functions";
  @import "../../../style/scss/components/wc-messagebox";
  .page{
    background:#000 url(./images/page-bg.png);
  }
</style>
<template>
  <div class="page">
    <loading v-if="show"/>
    <router-view class="page__animate-root"></router-view>
  </div>
</template>

<script>
	import $ from 'jquery'
	import {mapState, mapActions} from 'vuex'
	import * as types from './store/types'

	export default {
		data() {
			return {}
		},
		computed: {
			...mapState(['show'])
		},
		created() {
			var vm = this
			$.ajax({
				url: 'http://wx.zhidx.com/zhidx/gtic/getuserlist',
				type: 'get',
				dataType: 'jsonp',
				success(replayData) {
					vm.$store.commit(types.getuserlist, replayData)
				},
				error(json) {

				},
				complete() {
					vm.hidePageLoading()
				}
			})
		},
		methods: {
			...mapActions([
				'hidePageLoading'
			])
		},
	}
</script>

