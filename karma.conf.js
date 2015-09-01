module.exports = function(config) {
  config.set({
    frameworks: [
      'jasmine'
    ],

    files: [
      'tests/**/*-spec.js'
    ],

    exclude: [
    ],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-phantomjs-shim',
      'karma-requirejs'
    ],
    
    hostname: 'question-prod.elasticbeanstalk.com',

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: true,

    proxies:  {
      '/': 'http://question-prod.elasticbeanstalk.com'
    },
  })
}
