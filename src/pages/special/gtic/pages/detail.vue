<style lang="scss" scoped="">
  @import "../../../../style/scss/helpers/functions";

  .page {
    background: #000 url(../images/page-bg.png);
  }

  .header-nav + .content-wrap {
    padding-top: px2rem(88);
  }

  .content-wrap {
    overflow: hidden;
  }
</style>
<style lang="scss">
  @import "../../../../style/scss/helpers/functions";
  @import "../../../../style/scss/components/wc-messagebox";

  .mt100 {
    margin-top: px2rem(100) !important;
  }
</style>

<template>
  <div class="page">
    <!--<page-header-->
    <!--class="header-nav"-->
    <!--:href="true"-->
    <!--/>-->
    <div class="content-wrap">
      <page-logo class="window__scroll-flage" id="home"></page-logo>
      <com2-logo/>
      <com3-desc
        class="mt100"
        :item="item"
      />
      <page-bottom/>
    </div>
    <page-top/>
    <!--<com3-share/>-->
  </div>
</template>

<script>
	import PageHeader from '../components/nav/header.vue'
	import PageTop from '../components/scrolltop/page-top.vue'
	import PageLogo from '../components/logo/logo.vue'
	import PageBottom from '../components/bottom/bottom.vue'
	import Com2Logo from '../components/com2-logo/com2-logo'
	import Com3Desc from '../components/com3-desc/com3-desc'
	import Com3Share from '../components/com3-share/com3-share'
	import $ from 'jquery'

	var Cookies = require('cookies-js')

	function GetQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]);
		return null;
	}

	export default {
		data() {
			return {
				show: false,
				item: {},
				type: GetQueryString('type'),
				id: GetQueryString('id')
			}
		},
		created() {
			var vm = this
			var code = Cookies.get('code') || ('code' + String(Math.random()).replace('.', '') + String(new Date().getTime()))
			Cookies.set('code', code, {expires: 999999999})

			$.ajax({
				url: 'http://wx.zhidx.com/zhidx/gtic/getuserlist',
				type: 'get',
				dataType: 'jsonp',
				data: {
					code
				},
				success(replayData) {
					(replayData[vm.type] || []).forEach((item) => {
						if (item.id == vm.id) {
							vm.item = item
						}
					})
				},
				error(json) {

				},
				complete() {
					vm.show = false
				}
			})
		},
		components: {
			PageHeader,
			PageTop,
			PageLogo,
			PageBottom,
			Com2Logo,
			Com3Desc,
			Com3Share
		}
	}
</script>

<style lang="scss">
  $IMAGES_PATH: '../../../../style/images/';
  @import './../../../../style/scss/app.scss';
</style>
