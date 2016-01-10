var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        db:'mongodb://localhost/mean_demo',
        port: process.env.PORT || 7777
    },
    production: {
        rootPath: rootPath,
        db:'mongodb://mkds:killer7!@ds039185.mongolab.com:39185/mean_demo',
        port: process.env.PORT || 80
    }
};