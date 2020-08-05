const nextConfig = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    })

    config.module.rules.push({
      test: /\.(png|jpg|webp)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: `/_next/static/files`,
          outputPath: 'static/files'
        }
      }
    })

    return config
  }
}

module.exports = nextConfig
