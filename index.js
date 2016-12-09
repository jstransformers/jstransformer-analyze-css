'use strict'

var Promise = require('promise')
var AnalyzeCSS = require('analyze-css')

exports.name = 'analyze-css'
exports.outputFormat = 'json'

exports.renderAsync = function (str, options) {
  return new Promise(function (resolve, reject) {
    options = options && typeof options === 'object' ? options : {}
    // eslint-disable-next-line no-new
    new AnalyzeCSS(str, options, function (err, results) {
      if (err) {
        return reject(err)
      }
      var output = JSON.stringify(results, null, 2)
      resolve(output)
    })
  })
}
