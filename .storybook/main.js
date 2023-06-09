module.exports = {
  // core: {
  //   builder: 'webpack5',
  //   disableTelemetry: true
  // },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  stories: ['../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-postcss',
      name: '@storybook/addon-styling',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  // webpackFinal: async (config) => {
  //   config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, '../src')];
  //
  //   return config;
  // },
}