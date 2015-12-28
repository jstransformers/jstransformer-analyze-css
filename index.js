'use strict';

var Promise = require('promise');
var AnalyzeCSS = require('analyze-css');

exports.name = 'analyze-css';
exports.outputFormat = 'json';

exports.renderAsync = function (str, options) {
  return new Promise(function (resolve, reject) {
    options = options && typeof options === 'object' ? options : {};
    new AnalyzeCSS(str, options, function (err, results) {
      if (err) return reject(err);
      resolve(JSON.stringify(results, null, 2));
    });
  });
};
