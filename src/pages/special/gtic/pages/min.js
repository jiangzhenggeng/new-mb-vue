import $ from 'jquery'
import {mapState, mapActions} from 'vuex'
import * as types from '../store/types'

export default {
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