import $ from 'jquery'
import {mapActions} from 'vuex'

export default {
	methods: {
		clickVote(id) {
			if(!id) return
			var vm = this
			$.ajax({
				url: 'http://wx.zhidx.com/zhidx_gtic_vote.php',
				type: 'get',
				data: {
					id
				},
				dataType: 'jsonp',
				success(replayData) {
					if (replayData.resultCode == 0) {
						vm.$alert('投票成功').then(()=>{
							window.location.reload()
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