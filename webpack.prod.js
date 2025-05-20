const { merge } = require('webpack-merge');
const webpack = require('webpack');
const { commonConfig, publicPaths } = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    publicPath: publicPaths.PROD,
  },
  plugins: [
    ...commonConfig.plugins,
    new webpack.DefinePlugin({
      API_URL: JSON.stringify('https://edge-graph.adobe.io/api/03e397ed-8ca4-4f02-b800-a441549af898/graphql'),
      TEST_URL: JSON.stringify(
        'https://edge-sandbox-graph.adobe.io/api/4de021f2-17ae-4040-8999-b86cc22eb2c8/graphql'
      ),
      SANDBOX_KEY: JSON.stringify('storefront-widgets'),
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  optimization: {
    minimize: true,
  },
});
