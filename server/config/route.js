var jade = require('jade'),
    users = require('../controller/users'),
    auth = require('./auth'),
    courses = require('../controller/courses');

module.exports = function (app) {
    //TODO:to setup routes//
    app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
    app.post('/api/users', users.createUser);
    app.put('/api/users', users.updateUser);

    app.get('/api/courses', courses.getCourses)

    app.get('/partials/*', function (req, res) {
        res.render('../../public/app/' + req.params[0]);
    });

    //TODO:post for passport
    app.post('/login', auth.authenticate);
    //DONE//

    //TODO:logout
    app.post('/logout', function (req, res) {
        req.logout();
        res.end();
    });
    //DONE//

    app.all('/api/*', function (req, res) {
        res.send(404);
    });

    //catch all route
    app.get('*', function (req, res) {
        res.render('index',{
            bsUser: req.user
        });
    });
    //DONE//
};