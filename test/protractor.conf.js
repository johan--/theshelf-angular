'use strict';

exports.config = {

  baseUrl: 'http://localhost:3000/',

  capabilities: {
    browserName: 'chrome',
    version: '',
    platform: 'ANY'
  },

  framework: 'mocha',

  mochaOpts: {
    reporter: 'spec',
    timeout: 4000
  },

  specs: [
    'e2e/**/*.js'
  ]

};
