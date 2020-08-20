module.exports = function extendBabelConfig(api) {
  api.cache(true);
  const config = {};

  config.presets = ['react-app', { absoluteRuntime: false }];
  config.plugins = ['babel-plugin-styled-components'];

  return config;
};
