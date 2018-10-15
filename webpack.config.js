const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function GetRandom(minNum, maxNum) {
	return Math.floor( Math.random() * (maxNum - minNum + 1) ) + minNum;
}

let pathsToClean = [
  'assets',
  'js',
  'scss',
  'images',
  '*.html',
];

let cleanOptions = {
  verbose:  true
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: 'index',
    showcase: 'showcase',
    submitdweb: 'submitdweb',
    blog: 'blog',
    document: 'document',
    privacy: 'privacy',
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'js/[name].js?[hash:8]',
    publicPath: process.env.NODE_ENV === "development" ? "/" : "./",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  },
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('src/js'),
      path.resolve('src/scss'),
      path.resolve('src/images'),
      path.resolve('node_modules')
    ],
    extensions: ['.js'],
  },
  devServer: {
    compress: true,
    port: GetRandom(3000, 4000),
    stats: {
        assets: true,
        cached: false,
        chunkModules: false,
        chunkOrigins: false,
        chunks: false,
        colors: true,
        hash: false,
        modules: false,
        reasons: false,
        source: false,
        version: false,
        warnings: false
    },
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
        include: path.resolve('src/scss'),
        exclude: path.resolve('./node_modules'),
      },
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        include: path.resolve('src'),
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/,
        use: [{
            loader: 'url-loader',
            options: {
              limit: 3000,
              name: '[path][name].[ext]?[hash:8]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              }
            }
          }
        ],
        include: path.resolve('src/images'),
        exclude: path.resolve('./node_modules'),
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new CopyWebpackPlugin([
      { from: 'assets', to: 'assets' },
      { from: 'images', to: 'images' }
    ]),
    new HtmlWebpackPlugin({
      title: 'Portal Network',
      filename: 'index.html',
      template: 'html/index.html',
      chunks: [ 'vendor', 'index' ],
      hash: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Portal Network | ShowCase',
      filename: 'showcase.html',
      template: 'html/showcase.html',
      chunks: [ 'vendor', 'showcase' ],
      hash: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Portal Network | Submit a ÐWEB',
      filename: 'submitdweb.html',
      template: 'html/submitdweb.html',
      chunks: [ 'vendor', 'submitdweb' ],
      hash: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Portal Network | Blog',
      filename: 'blog.html',
      template: 'html/blog.html',
      chunks: [ 'vendor', 'blog' ],
      hash: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Portal Network | Document',
      filename: 'document.html',
      template: 'html/document.html',
      chunks: [ 'vendor', 'document' ],
      hash: true,
    }),
    // new HtmlWebpackPlugin({
    //   title: 'Portal Network | Roadmap',
    //   filename: 'newroadmap.html',
    //   template: 'html/newroadmap.html',
    //   chunks: [ 'vendor', 'newroadmap' ],
    //   hash: true,
    // }),
    new HtmlWebpackPlugin({
      title: 'Portal Network | Privacy Policy',
      filename: 'privacy_policy.html',
      template: 'html/privacy_policy.html',
      chunks: [ 'vendor', 'privacy' ],
      hash: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Portal Network | Terms Coditions',
      filename: 'terms_coditions.html',
      template: 'html/terms_coditions.html',
      chunks: [ 'vendor', 'privacy' ],
      hash: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Technical Paper',
      filename: 'tp.html',
      template: 'html/tp.html',
      excludeChunks: [
        "index",
        "showcase",
        "blog",
        "document",
        "newroadmap",
        "privacy",
        "terms",
        "analysis",
        "decentralized",
        "hackathon",
        "metaMask",
        "wanchain",
        "ens",
        "submitdweb"
      ]
    })
  ]
}