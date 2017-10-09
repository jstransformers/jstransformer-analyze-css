# jstransformer-analyze-css

[AnalyzeCSS](https://github.com/macbre/analyze-css) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-analyze-css/master.svg)](https://travis-ci.org/jstransformers/jstransformer-analyze-css)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-analyze-css/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-analyze-css)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-analyze-css/master.svg)](http://david-dm.org/jstransformers/jstransformer-analyze-css)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-analyze-css.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-analyze-css.svg)](https://www.npmjs.org/package/jstransformer-analyze-css)

## Installation

    npm install jstransformer-analyze-css

## API

```js
var analyzer = require('jstransformer')(require('jstransformer-analyze-css'))

analyzer.renderAsync('.bar {margin: 0 !important}')
.then(function (stats) {
  //=> JSON object as https://github.com/macbre/analyze-css#results
})
```

## License

MIT
