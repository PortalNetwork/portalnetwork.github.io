const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
function GetRandom(minNum, maxNum) {
	return Math.floor( Math.random() * (maxNum - minNum + 1) ) + minNum;
}
module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: 'index',
    showcase: 'showcase',
    submitdweb: 'submitdweb',
    blog: 'blog',
    roadmap: 'roadmap',
    analysis: 'blog',
    decentralized: 'blog',
    hackathon: 'blog',
    metaMask: 'blog',
    wanchain: 'blog',
    ens: 'blog'
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
      title: 'Portal Network | Roadmap',
      filename: 'roadmap.html',
      template: 'html/roadmap.html',
      chunks: [ 'vendor', 'roadmap' ],
      hash: true,
    }),
    new HtmlWebpackPlugin({
      title: 'What is ENS & What problem it solved? – Portal Network | Blog',
      filename: 'ens.html',
      template: 'html/ens.html',
      chunks: [ 'vendor', 'blog' ],
      hash: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Portal Network at NIFTY Hackathon & Conference — Hong Kong – Portal Network | Blog',
      filename: 'nifty.html',
      template: 'html/nifty.html',
      chunks: [ 'vendor', 'blog' ],
      hash: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Portal Network Hackathon Korea 2018 — Protal Network Announcement | Blog',
      filename: 'hackathonkorea.html',
      template: 'html/hackathonkorea.html',
      chunks: [ 'vendor', 'blog' ],
      hash: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Portal Network in Wanchain Asia Tour 2018 Indonesia / Malaysia / South Korea | Blog',
      filename: 'wanchain.html',
      template: 'html/wanchain.html',
      chunks: [ 'vendor', 'blog' ],
      hash: true,
    }),
    new HtmlWebpackPlugin({
      title: 'How to use MetaMask Extension? | Blog',
      filename: 'metaMask.html',
      template: 'html/metaMask.html',
      chunks: [ 'vendor', 'blog' ],
      hash: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Key Findings of Our Data Analysis of ENS | Blog',
      filename: 'analysis.html',
      template: 'html/analysis.html',
      chunks: [ 'vendor', 'blog' ],
      hash: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Decentralized Database Hackathon Takeaways : Bluzelle X Portal Network | Blog',
      filename: 'decentralized.html',
      template: 'html/decentralized.html',
      chunks: [ 'vendor', 'blog' ],
      hash: true,
    }),
  ]
}