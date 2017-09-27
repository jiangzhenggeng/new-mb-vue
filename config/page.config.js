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
      filename: path.resolve(__dirname, '../dist/event.php'),
      template: getTplPath('event'),
      chunks: [...chunksCommon, 'event'],
    }
  }
]
