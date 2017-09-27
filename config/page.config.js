var path = require('path')
var basePath = path.resolve(__dirname, '../../../jiguo/protected/modules/mb/views');
var chunksCommon = ['vendor', 'manifest'];

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
      chunks: [...chunksCommon, 'index'],
    }
  },
  {
    name: 'event',
    main: './src/pages/event/app.vue.js',
    options: {
      filename: basePath + '/event/index.php',
      template: getTplPath('event'),
      chunks: [...chunksCommon, 'event'],
    }
  },
  {
    name: 'product',
    main: './src/pages/product/app.vue.js',
    options: {
      filename: basePath + '/product/list.php',
      template: getTplPath('product'),
      chunks: [...chunksCommon, 'product'],
    }
  },
  {
    name: 'rebate',
    main: './src/pages/rebate/app.vue.js',
    options: {
      filename: basePath + '/rebate/list.php',
      template: getTplPath('rebate'),
      chunks: [...chunksCommon, 'rebate'],
    }
  },
  {
    name: 'list',
    main: './src/pages/list/app.vue.js',
    options: {
      filename: basePath + '/list/list.php',
      template: getTplPath('list'),
      chunks: [...chunksCommon, 'list'],
    }
  },
  {
    name: 'article_all',
    main: './src/pages/article/app.vue.js',
    options: {
      filename: basePath + '/article/list_all.php',
      template: getTplPath('article'),
      chunks: [...chunksCommon, 'article_all'],
    }
  },
  {
    name: 'article_one',
    main: './src/pages/article/app_one.vue.js',
    options: {
      filename: basePath + '/article/list_one.php',
      template: getTplPath('article'),
      chunks: [...chunksCommon, 'article_one'],
    }
  }
]













