import webpack from 'webpack';
import path from 'path';

export default {
    entry: {
        index: [
            'eventsource-polyfill', // necessary for hot reloading with IE
            'webpack-hot-middleware/client?reload=true', // note that it reload the page it hot module reload 
            './src/index'
        ]
    },
    target: 'web',
    output: {
        path: path.join(__dirname, 'dist'),
        publicpath: '/dist/',
        filename: '[name].js'
    },
    plugins: [
        
    ]
}