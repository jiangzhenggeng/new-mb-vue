var path = require('path')
var basePath = path.resolve(__dirname, '../../../jiguo/protected/modules/mb/views');

function getTplPath (module) {
  return path.resolve(__dirname, `../src/pages/${module}/block_tpl/index.ejs.js`);
}

module.exports = [
  {
    name: 'index',
    main: './src/pages/app.vue.js',
    options: {
      filename: basePath + '/index/index.php',
      template: getTplPath('index'),
    }
  },
  {
    name: 'event',
    main: './src/pages/event/app.vue.js',
    options: {
      filename: basePath + '/event/index.php',
      template: getTplPath('event'),
    }
  },
  {
    name: 'product',
    main: './src/pages/product/app.vue.js',
    options: {
      filename: basePath + '/product/list.php',
      template: getTplPath('product'),
    }
  },
  {
    name: 'rebate',
    main: './src/pages/rebate/app.vue.js',
    options: {
      filename: basePath + '/rebate/list.php',
      template: getTplPath('rebate'),
    }
  },
  {
    name: 'list',
    main: './src/pages/list/app.vue.js',
    options: {
      filename: basePath + '/list/list.php',
      template: getTplPath('list'),
    }
  },
  {
    name: 'article_all',
    main: './src/pages/article/app.vue.js',
    options: {
      filename: basePath + '/article/list_all.php',
      template: getTplPath('article'),
    }
  },
  {
    name: 'article_one',
    main: './src/pages/article/app_one.vue.js',
    options: {
      filename: basePath + '/article/list_one.php',
      template: getTplPath('article'),
    }
  },
  //极果优品
  {
    name: 'special_youpin',
    main: './src/pages/special/youpin/app.vue.js',
    options: {
      filename: basePath + '/html/youpin.php',
      template: getTplPath('special/youpin'),
    }
  }
]













