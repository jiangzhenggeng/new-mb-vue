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
    <loading v-if="show"/>
    <!--<page-header-->
    <!--class="header-nav"-->
    <!--:href="true"-->
    <!--/>-->
    <div class="content-wrap">
      <page-logo class="window__scroll-flage" id="home"></page-logo>
      <com2-logo/>
      <com2-next
        class="mt100"
        :type="type"
      />
      <com2-list
        class="mt100"
        :list="list"
        :type="type"
      />
      <page-third
        class="window__scroll-flage"
        id="awards"
        :refresh="true"
        title="/ 其他奖项 /"
      />
      <page-fifth></page-fifth>
      <page-bottom></page-bottom>
    </div>
    <page-top></page-top>
  </div>
</template>

<script>
	import $ from 'jquery'
	import PageHeader from '../components/nav/header.vue'
	import PageTop from '../components/scrolltop/page-top.vue'
	import PageLogo from '../components/logo/logo.vue'
	import PageThird from '../components/third/third'
	import PageFifth from '../components/fifth/fifth.vue'
	import PageBottom from '../components/bottom/bottom.vue'
	import Com2Logo from '../components/com2-logo/com2-logo'
	import Com2Next from '../components/com2-next/com2-next'
	import Com2List from '../components/com2-list/com2-list'
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
				list: [],
				type: GetQueryString('type')
			}
		},
		created() {
			var vm = this
			var code = Cookies.get('code') || ('code' + String(Math.random()).replace('.', '') + String(new Date().getTime()))
			Cookies.set('code', code, {expires: 999999999})

			$.ajax({
				url: 'http://wx.zhidx.com/zhidx/gtic/getuserlist',
				type: 'get',
        data:{
					code
        },
				dataType: 'jsonp',
				success(replayData) {
					vm.list = replayData[vm.type]
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
			PageFifth,
			Com2Logo,
			Com2Next,
			Com2List,
			PageThird
		},
		methods: {},
	}
</script>

<style lang="scss">
  $IMAGES_PATH: '../../../../style/images/';
  @import './../../../../style/scss/app.scss';
</style>
