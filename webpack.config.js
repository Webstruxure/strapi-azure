const path = require('path');

module.exports = {
    entry: '/config/server.js', 
    output: [
        {
            filename: 'main.4af98f3d.js',
            path: path.resolve(__dirname, 'build')
        },
        {
            filename: 'runtime~main.7c1f9226.js',
            path: path.resolve(__dirname, 'build')
        }
    ]
};