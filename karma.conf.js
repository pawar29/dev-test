module.exports = function (config) {
  config.set({
    browsers: ['ChromeSandbox'],
    customLaunchers: {
      ChromeSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    }
  });
};
