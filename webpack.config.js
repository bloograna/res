/* eslint-env node */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');

const config = {
  stats: {
    // Configure the console output
    errorDetails: true, // this does show errors
    modules: true,
    reasons: true
  },
  entry: ['./src/app.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9010
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader', 'source-map-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2017', 'react', 'stage-0'],
              plugins: [
                'transform-class-properties',
                'transform-decorators-legacy',
                'transform-react-jsx',
                [
                  'react-css-modules',
                  {
                    filetypes: {
                      '.less': {
                        syntax: 'postcss-less'
                      }
                    },
                    context: __dirname,
                    exclude: 'node_modules'
                  }
                ]
              ]
            }
          }
        ]
      },
      {
        test: /.(gif|png|woff(2)?|eot|otf|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000' // ?modules&localIdentName=[name]---[local]---[hash:base64:5]
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
    ]
  },

  devtool: 'inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      hash: true,
      inject: true,
      showErrors: true
    }),
    new UnusedFilesWebpackPlugin({
      patterns: ['**/*.js'],
      globOptions: {
        ignore: [
          'src/**/*.spec.js',
          'coverage/**/*',
          'dist/**/*',
          'node_modules/**/*',
          'target/**/*',
          'banner.js',
          'jestsetup.js',
          'webpack.config.js'
        ]
      }
    })
  ]
};

try {
  console.log('running hard-source');
  const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
  config.plugins.push(new HardSourceWebpackPlugin());
} catch (e) {
  // eslint-disable-next-line no-console
  console.log('HardSource webpack plugin unavailable; building without it');
}

module.exports = config;
