var path = require('path')
var PrerenderSpaPlugin = require('prerender-spa-plugin')
var basePath = path.resolve(__dirname, '../../../jiguo/protected/modules/mb/views')

function getTplPath (module) {
  return path.resolve(__dirname, `../src/pages/${module}/block_tpl/index.ejs.js`)
}

module.exports = [
  {
    name: 'test',
    main: './src/pages/test/main.js',
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
    main: './src/pages/index/main.js',
    options: {
      filename: basePath + '/index/index.php',
      template: getTplPath('index'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: false,
      },
    },
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
    name: 'list_noheader',
    main: './src/pages/list/main-noheader.js',
    options: {
      filename: basePath + '/list/list-noheader.php',
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
    main: './src/pages/special/gtic/index.js',
    options: {
      filename: '/Users/jiangzg/Desktop/gtic/mb.php',
      template: getTplPath('special/gtic'),
    },
    assetsPublicPath: 'https://cdn.jiguo.com/static@2.0/'
  },
  {
    name: 'gtic-type',
    main: './src/pages/special/gtic/type.js',
    options: {
      filename: '/Users/jiangzg/Desktop/gtic/type.php',
      template: getTplPath('special/gtic'),
    },
    assetsPublicPath: 'https://cdn.jiguo.com/static@2.0/'
  },
  {
    name: 'gtic-detail',
    main: './src/pages/special/gtic/detail.js',
    options: {
      filename: '/Users/jiangzg/Desktop/gtic/detail.php',
      template: getTplPath('special/gtic'),
    },
    assetsPublicPath: 'https://cdn.jiguo.com/static@2.0/'
  },
  {
    name: 'gtic-pc',
    main: './src/pages/special/gtic/pc/main.js',
    options: {
      filename: '/Users/jiangzg/Desktop/gtic/index.php',
      template: getTplPath('special/gtic/pc'),
    }
  },
  {
    name: 'jd-h5',
    main: './src/pages/special/jd/main.js',
    options: {
      filename: '/Users/jiangzg/Desktop/jd/mb.html',
      template: getTplPath('special/jd'),
    }
  }
]













