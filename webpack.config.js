const path = require('path')
const EslintPlugin = require('eslint-webpack-plugin')
const HtmlPlugins = require('html-webpack-plugin')

module.exports = {
  // 入口文件
  entry: './src/main.js',  //相对路径
  // 输出文件
  output: {
    // 输出路径
    path: path.resolve(__dirname, 'dist'),   //绝对路径
    // 入口文件输出的文件名
    filename: 'js/main.js',
    // 打包前清除上一次打包的文件夹
    // clean: true
  },
  // loaders
  module: {
    rules: [
      // 处理css资源
      {
        test: /\.css$/,  //只检测以.css结尾的文件
        use: [ //执行顺序 从右到左，从上到下
          'style-loader',  //将js中的css文件通过创建style标签的形式添加到html文件中
          'css-loader' //将css资源编译成common js的模块化引入到js文件中
        ]
      },
      // 处理less资源
      {
        test: /\.less$/,  //检测.less后缀的文件
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      // 处理图片资源
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            // 小于10kb的图片转为base64格式
            maxSize: 10 * 1024  //10kb
          }
        },
        generator: {
          filename: 'static/miages/[hash:10][ext][query]'
        }
      },
      // 处理字体图标以及其他媒体资源资源
      {
        test: /\.(ttf|woff2?|avi|mp3|mp4)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[hash:10][ext][query]'
        }
      },
      // babel 处理ES6语法
      {
        test: /\.js$/,
        exclude: /node_modules/,  //排除node_modules中的js文件
        loader: 'babel-loader',
        // options: {  //使用预设
        //   presets: ['@babel/preset-env']
        // }
      },
    ]
  },
  // plugins
  plugins: [
    new EslintPlugin({
      // 检测哪些文件
      context: path.resolve(__dirname, 'src')
    }),
    new HtmlPlugins({
      // 模板  以public下的index.html为模板创建新的文件
      // 新的html文件特点：1、结构和原来一致，2、会自动引入打包输出的资源
      template: path.resolve(__dirname, 'public/index.html')
    })
  ],
  // 配置服务器 不会输出资源 在内存中编译打包
  devServer: {
    host: 'localhost',
    port: '3000',
    open: true
  },
  // 模式
  mode: 'development'
}