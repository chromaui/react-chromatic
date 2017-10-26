// eslint-disable-next-line import/no-extraneous-dependencies
// import webpack from 'webpack';
// TODO -- add uglify https://webpack.js.org/guides/tree-shaking/
//   https://github.com/hichroma/chromatic/issues/159
import nodeExternals from 'webpack-node-externals';

const commonConfig = {
  devtool: 'source-map',
  entry: {
    client: './src/client/index.js',
    server: './src/server/index.js',
  },
  output: {
    filename: 'dist/[name].js',
    libraryTarget: 'commonjs2',
  },
  externals: [
    nodeExternals({
      modulesDir: '../../node_modules',
      whitelist: [
        'react-element-to-jsx-string',
        'stringify-object',
        'get-own-enumerable-property-symbols',
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: /node_modules\/(stringify-object|get-own-enumerable-property-symbols)/,
      },
    ],
  },
};

const clientConfig = {
  ...commonConfig,
  entry: './src/client/index.js',
  output: {
    filename: 'dist/client.js',
    libraryTarget: 'commonjs2',
  },
  target: 'web',
  node: {
    // Do not attempt to provide polyfills for process, we will get from parent webpack
    process: false,
  },
};

const testerConfig = {
  ...commonConfig,
  externals: [...commonConfig.externals, { '../server': 'commonjs ./server.js' }],
  entry: './src/tester/index.js',
  output: {
    publicPath: 'dist',
    filename: 'dist/tester.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  node: {
    __dirname: false,
  },
};

export default [clientConfig, testerConfig];
