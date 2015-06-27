var getConfig = require('hjs-webpack')

module.exports = getConfig({
  in: 'app/src/app.js',
  out: 'public',
  clearBeforeBuild: true
})