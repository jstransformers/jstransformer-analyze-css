'use strict'

const AnalyzeCSS = require('analyze-css')

exports.name = 'analyze-css'
exports.outputFormat = 'json'

exports.renderAsync = function (str, options) {
  return new Promise((resolve, reject) => {
    options = options && typeof options === 'object' ? options : {}
    // eslint-disable-next-line no-new
    new AnalyzeCSS(str, options, (err, results) => {
      if (err) {
        return reject(err)
      }

      const output = JSON.stringify(results, null, 2)
      resolve(output)
    })
  })
}
