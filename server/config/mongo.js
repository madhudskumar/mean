var mongoose = require('mongoose'),
    user = require('../models/User'),
    Course = require('../models/courses');

module.exports = function (config) {
    //TODO:connect to mongoDB as of ~development in env or ~env.PORT
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', function () {
        console.error.bind(console, 'connection failure...');
    });
    db.once('open', function callback() {
        console.log('mean_demo connection open on ' + config.db.toString() + '\n')
    });

    user.createDefaultUsers();
    Course.createDefaultCourses();

};