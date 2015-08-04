'use strict';

var Bluebird = require('bluebird')
var AnalyzeCSS = require('analyze-css')

exports.name = 'analyze-css';
exports.inputFormats = ['analyze-css', 'css', 'scss', 'sass'];
exports.outputFormat = 'json';

exports.renderAsync = function (str, options) {
  return new Bluebird(function (resolve, reject) {
    options = options && typeof options === 'object' ? options : {}
    new AnalyzeCSS(str, options, function (err, results) {
      if (err) return reject(err)
      resolve(results)
    })
  })
}

exports.renderAsync('.foo {margin: 0 !important}').then(console.log)
