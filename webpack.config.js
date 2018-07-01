const path = require('path');

module.exports = {
    entry: path.resolve('./src/index.js'),
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname)
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"

            }

        },
        {
            test: /\.css$/,
            use: {
                loader: 'css-loader'
            }
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }

        }

        ]

    },
};
