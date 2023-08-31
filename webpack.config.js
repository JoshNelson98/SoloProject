const path = require('path')
const HTMLwepbackplugin = require('html-webpack-plugin')

module.exports = {
   
    entry: './react/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new HTMLwepbackplugin({
            template:'./react/index.html',
            filename: './react/index.html'
        })
        ],

mode: 'development',
devtool: 'eval-source-map',
devServer: {
    host: 'localhost',
    port: 8080,
    hot : true,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },

    static: {
        publicPath: '/',
        directory: path.resolve(__dirname, 'dist')
    },
    proxy: {
        '/api/**': {
            target: 'http://localhost:3000',
            secure: false,
        },
        '/addWeather': {
            target: 'http://localhost:3000',
            secure: false
        }
    }
},
module: {
    rules: [
        {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
    
        },
        {
            test: /css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],
          },
    ]
},
// plugins: [
//     new HTMLwepbackplugin({
//         template:'./react/index.html'
//     })
//     ]

}