const { resolve } = require('path')

const alias = {
  styles:        resolve(__dirname, '../src/styles'),
  core:          resolve(__dirname, '../src/core'),
  components:    resolve(__dirname, '../src/components'),
  containers:    resolve(__dirname, '../src/containers/'),
  hocs:          resolve(__dirname, '../src/hocs'),
  layouts:       resolve(__dirname, '../src/layouts'),
  utils:         resolve(__dirname, '../src/utils'),
  dist:          resolve(__dirname, '../dist')
}

module.exports = alias
