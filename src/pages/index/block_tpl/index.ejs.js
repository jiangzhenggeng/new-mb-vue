const indexTpl = require('./index.ejs')
const flexible = require('raw-loader!./../../../inline/flexible')

module.exports = indexTpl({
  flexible
})




