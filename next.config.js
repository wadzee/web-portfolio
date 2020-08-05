// next.config.js
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

    return config
  }
}

module.exports = nextConfig
