const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',

  /**
   * 我们会在 demo 目录下建多个子目录
   * 每个子目录的下会创建一个 app.ts
   * app.ts 作为 webpack 构建的入口文件
   * entries 收集了多目录个 入口文件, 并且每个入口还引入了一个用于热更新的文件
   * entries是一个对象, key 为目录名
   */
  entry: fs.readFileSync(__dirname).reduce((entries, dir) => {
    const fullDir = path.join(__dirname, dir)
    const entry = path.join(__dirname, 'app.ts')

    if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
      // 目录名 为 key
      entries[dir] = ['webpack-hot-middleware/client', entry]
    }

    return entries
  }),

  /**
   * 根据不同的目录名称, 打包生成目标js, 名称和目录名一直
   */
  output: {
    path: path.join(__dirname, '__build__'),
    filename: '[name].js',  // name 对应的目录名
    publicPath: '/__build__/'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader'
          }
        ]
      },
      {
        test: /\.tsx$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),  // 热更新插件
    new webpack.NoEmitOnErrorsPlugin(),  //开发错误的插件
  ]
}
