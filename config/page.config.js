var path = require('path')
var PrerenderSpaPlugin = require('prerender-spa-plugin')
var basePath = path.resolve(__dirname, '../../../jiguo/protected/modules/mb/views')

function getTplPath(module) {
	return path.resolve(__dirname, `../src/pages/${module}/block_tpl/index.ejs.js`)
}

module.exports = [
	{
		name: 'test',
		main: './src/pages/test/main.js',
		notpackage: true,
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		options: {
			filename: path.resolve(__dirname, '../dist/index.html'),
			template: getTplPath('test'),
		},
		//扩展模块
		// subModel:{
		//
		// }
	},
	{
		name: 'index',
		main: './src/pages/main.js',
		options: {
			filename: basePath + '/index/index.php',
			template: getTplPath('index'),
		},
		//不允许集体打包方案
		notpackage: true,
		externals: {
			'vue': 'Vue',
			'vuex': 'Vuex',
			'vue-router': 'VueRouter',
			'jquery': '$'
		}
	},
	{
		name: 'event',
		main: './src/pages/event/main.js',
		options: {
			filename: basePath + '/event/index.php',
			template: getTplPath('event'),
		}
	},
	{
		name: 'product',
		main: './src/pages/product/main.js',
		options: {
			filename: basePath + '/product/list.php',
			template: getTplPath('product'),
		}
	},
	{
		name: 'rebate',
		main: './src/pages/rebate/main.js',
		options: {
			filename: basePath + '/rebate/list.php',
			template: getTplPath('rebate'),
		}
	},
	{
		name: 'list',
		main: './src/pages/list/main.js',
		options: {
			filename: basePath + '/list/list.php',
			template: getTplPath('list'),
		}
	},
	{
		name: 'article_all',
		main: './src/pages/article/main.js',
		options: {
			filename: basePath + '/article/list_all.php',
			template: getTplPath('article'),
		}
	},
	{
		name: 'article_one',
		main: './src/pages/article/main_one.js',
		options: {
			filename: basePath + '/article/list_one.php',
			template: getTplPath('article'),
		}
	},
	//极果优品
	{
		name: 'special_youpin',
		main: './src/pages/special/youpin/main.js',
		options: {
			filename: basePath + '/html/youpin.php',
			template: getTplPath('special/youpin'),
		},
		//预渲染优化
		// PrerenderSpaPlugin: new PrerenderSpaPlugin(
		// 	// Absolute path to compiled SPA
		// 	path.join(__dirname, '../dist'),
		// 	// List of routes to prerender
		// 	['/', '/register']
		// )
	},
	//搜索
	{
		name: 'search',
		main: './src/pages/search/main.js',
		options: {
			filename: basePath + '/search/index_v2.php',
			template: getTplPath('search'),
		}
	},
	//个人中心
	{
		name: 'user',
		main: './src/pages/user/main.js',
		options: {
			filename: basePath + '/user/index_v2.php',
			template: getTplPath('user'),
		}
	},
	{
		name: 'user_v2',
		main: './src/pages/user_v2/main.js',
		options: {
			filename: basePath + '/userv2/index.php',
			template: getTplPath('user_v2'),
		}
	},
	//下订单
	{
		name: 'order',
		main: './src/pages/order/main.js',
		options: {
			filename: basePath + '/pay/index_v2.php',
			template: getTplPath('order'),
		}
	},
	//优惠券
	{
		name: 'coupon',
		main: './src/pages/coupon/main.js',
		options: {
			filename: basePath + '/user/coupon_v2.php',
			template: getTplPath('coupon'),
		}
	},
	{
		name: 'gtic',
		main: './src/pages/special/gtic/main.js',
		//不参与集体打包
		notpackage: (function () {
			global.staticNoShowName = true
			return true
		})(),
		options: {
			filename: path.resolve(__dirname, '../../../jiguo/static/gtic/mb.php'),
			template: getTplPath('special/gtic'),
		}
	},
	{
		name: 'gtic-pc',
		main: './src/pages/special/gtic/pc/main.js',
		//不参与集体打包
		notpackage: (function () {
			//资源不显示名字
			global.staticNoShowName = true
			return true
		})(),
		options: {
			filename: path.resolve(__dirname, '../../../jiguo/static/gtic/index.php'),
			template: getTplPath('special/gtic/pc'),
		}
	}
]













