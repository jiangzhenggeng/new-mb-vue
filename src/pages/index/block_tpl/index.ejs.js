const indexTpl = require('./index.ejs')
const mobileUtil = require('raw-loader!./../../../inline/mobileUtil')

module.exports = indexTpl({
  mobileUtil
})




