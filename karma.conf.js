// example config https://github.com/nikku/karma-browserify/tree/master/example

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [ 'jasmine', 'browserify' ],

    reporters: ['kjhtml'],
    //browsers: ['PhantomJS'],

    // list of files / patterns to load in the browser
    files: ['tests/*.js'],

    preprocessors: {
      'tests/**/*.js': [ 'browserify' ]
    },

    browserify: {
      debug: true,
      transform: [ 'brfs' ]
    }
 });
};