const isProduction = process.env.NODE_ENV === 'production'
const devtool = isProduction ? 'nosources-source-map' : 'eval-source-map'

module.exports = devtool
