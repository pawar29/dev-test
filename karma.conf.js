module.exports = function (config) {
  config.set({
    browsers: ['ChromeNoSandbox'],
    customLaunchers: {
      ChromeNoSandbox: {
        base: 'Chrome',
        flags: ['--no-sandbox', '--disable-gpu']
      }
    }
  });
};
