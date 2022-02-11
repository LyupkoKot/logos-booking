const webpack = require('webpack');
const { parsed: myEnv } = require('dotenv').config({
  path: '/Users/halynabochnak/Desktop/ReactStart/logos-booking/.env',
});

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    return config;
  },
};
