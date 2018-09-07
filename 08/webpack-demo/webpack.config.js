// webpack 运行是在node里运行 es6的语法是不能支持

const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: { // 多文件编译是对象的格式 单文件编译是 字符串和数组
        app: './src/main.js',
        index: './src/index.js'
    }, //程序打包入口
    output: { // 打包好的文件怎么输出
        path:path.resolve('dist'),  //配置 输出的具体目录（必须是绝对路径）
        filename: '[name].js', // 定义你打包的文件叫啥
        library: 'lemon', // 暴露全局变量 在浏览器里
        libraryTarget: 'umd2' // umd 通用的模块
    },
    module: { // 模块处理
        rules: [ // 模块处理规则
            {
                test: /\.css$/, //正则
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader'],
                //include: [], // 需要的
                //exclude: [path.resolve('src','style.less')], // 不需要的
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }, 
    resolve: { // 解析模块请求的选项
        extensions: ['.vue','.js'], // 自动匹配文件后缀规则
        alias: { // 用来给模块添加别名路径的
            'vue': 'vue/dist/vue.esm', //给vue取一个别名
            '@': path.resolve('src','assets')
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    mode: 'development' // production
}

// development 开发模式
// 开发模式会保留注释 控制台输出
// production 生产模式
// 生产模式不会保留任何注释 而且 控制台输出也会被清除掉