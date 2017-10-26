const indexTpl = require('./index.ejs')
const mobileUtil = require('raw-loader!./../../../tool/mobileUtil')

module.exports = indexTpl({
  mobileUtil
})




