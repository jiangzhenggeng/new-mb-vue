import $ from 'jquery'
import {mapActions} from 'vuex'

var Cookies = require('cookies-js')

export default {
	methods: {
		clickVote(id) {
			if (!id) return
			var vm = this

			var code = Cookies.get('code') || ('code' + String(Math.random()).replace('.', '') + String(new Date().getTime()))
			Cookies.set('code', code, {expires: 999999999})

			$.ajax({
				url: 'http://wx.zhidx.com/zhidx_gtic_vote.php',
				type: 'get',
				data: {
					id,
					code
				},
				dataType: 'jsonp',
				success(replayData) {
					if (replayData.resultCode == 0) {
						vm.$alert('投票成功').then(() => {
							vm.voteSuccess(id)
						})
					} else {
						vm.$alert(replayData.errorMsg || '投票成功')
					}
				},
				error(replayData) {
					vm.$alert(replayData.errorMsg || '投票失败')
				},
				complete() {
					vm.hidePageLoading()
				}
			})
		},
		...mapActions(['hidePageLoading'])
	}
}