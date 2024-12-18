const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    // Landing page
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),

    // Main sections
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks.html',
      filename: './tricks.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/spots.html',
      filename: './spots.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/chill.html',
      filename: './chill.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tips.html',
      filename: './tips.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/styleguide.html',
      filename: './styleguide.html'
    }),

    // // Section 'Tricks' articles
    // new HtmlWebpackPlugin({
    //   template: './src/art/art-articles.html',
    //   filename: './art/art-articles.html'
    // }),
    // // Section 'Spots' articles
    // new HtmlWebpackPlugin({
    //   template: './src/skateboarding/skateboarding-articles.html',
    //   filename: './skateboarding/skateboarding-articles.html'
    // }),
    // Section 'Chill' articles
    new HtmlWebpackPlugin({
      template: './src/chill/chill_films.html',
      filename: './chill/chill_films.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/chill/chill_history.html',
      filename: './chill/chill_history.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/chill/chill_interview.html',
      filename: './chill/chill_interview.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/chill/chill_playlist.html',
      filename: './chill/chill_playlist.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/chill/chill_selection.html',
      filename: './chill/chill_selection.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/chill/chill_slangs.html',
      filename: './chill/chill_slangs.html'
    }),
    // // Section 'Tips' articles
    // new HtmlWebpackPlugin({
    //   template: './src/tips/tips-articles.html',
    //   filename: './tips/tips-articles.html'
    // }),

    // Internal pages
    // new HtmlWebpackPlugin({
    //   hash: true,
    //   scriptLoading: 'blocking',
    //   template: './src/pages/page.html',
    //   filename: './pages/page.html',
    //   chunks: ['page']
    // }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/footer.html'),
        location: 'footerPartial',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
