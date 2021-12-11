const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@store': path.resolve(__dirname, 'src/store')
    }
  };

  return config;
};
