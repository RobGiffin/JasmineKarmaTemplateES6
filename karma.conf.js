module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    reporters: ['kjhtml'],
    //browsers: ['PhantomJS'],
    // list of files / patterns to load in the browser
    files: [
      'tests/*.js',
      'tests/**/*Spec.js'
    ],
    //plugins : ['karma-jasmine', 'karma-phantomjs-launcher', 'karma-spec-reporter']
 });
};