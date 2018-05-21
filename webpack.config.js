const path = require('path');

module.exports = {
    mode   : 'development',
    entry  : ['./src/js/main.js'],
    output : {
        filename: 'main.js',
        path: path.resolve(__dirname, 'js'),
        library: 'page'
    },
    module : {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    }
}
