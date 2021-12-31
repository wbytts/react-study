/*
一个react练习环境的webpack配置
src
  index.html
  index.js
*/
const path = require('path');

// 处理HTML资源：npm install html-webpack-plugin -D
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 向外暴露一个打包的配置对象
module.exports = {
  // 必选项： development 或 production
  mode: 'development',

  // 入口默认是 ./src/index.js，可以不指定
  entry: './src/index.js',
  // 输出
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[hash].js',
  },


  module: { // 模块相关配置
    rules: [ // 规则
      { // 处理 JS，JSX 文件
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      { // 处理 CSS 文件
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: { // CSS 模块化的配置
                /*
                    path：样式表（相对于项目根目录）所在路径
                    name：样式表文件名称
                    local：样式的类名定义名称
                    hash：32位的哈希值
                */
                // localIdentName: '[path]-[name]-[local]-[hash:5]'
                localIdentName: '[local]-[hash:32]'
              }
            }
          }
        ]
      },
      { // 处理图像文件
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024, // 小于 8*1024 KB的，解析为Base64格式
          esModule: false,
          name: '[hash:10].[ext]'
        }
      },
      { // 不需要处理的文件
        test: /\.(ttf|woff|woff2|eot|svg)$/,
        use: ['file-loader']
      }],
  },

  // 插件
  plugins: [
    // 默认会创建一个HTML文件，自动引入打包输出的所有资源(无配置时）
    new HtmlWebpackPlugin({ // html-webpack-plugin
      // 使用指定的html文件作为基础模板(不要手动再引入资源了)，不再创建一个新的文件
      template: './src/index.html',
      minify: { // 压缩HTML代码配置
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true,
      }
    }),
  ],

  resolve: {
    // 引入的时候，这几个文件的后缀名，可以省略不写！
    extensions: ['.js', '.jsx', '.json'],
    alias: { // 配置路径别名
      '@': path.join(__dirname, 'src')
    }
  },

  // 开发服务器配置
  devServer: {
    // 上下文路径
    contentBase: path.resolve(__dirname, "dist"),
    // gzip 压缩
    compress: true,
    // 进度条
    progress: true,
    // 服务端口
    port: 3000,
    // 是否自动打开浏览器
    open: 'msedge',
    // 是否开启模块热切换，module上会挂一个 hot: true 的属性
    //hot: true,
  }
};
