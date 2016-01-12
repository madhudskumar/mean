var jade = require('jade'),
    User = require('mongoose').model('User')
    auth = require('./auth');

module.exports = function (app) {
    //TODO:to setup routes//
    app.get('/api/users', auth.requiresRole('admin'), function (req, res) {
        User.find({}).exec(function (err, users) {
            res.send(users);
        })
    });

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

    //catch all route
    app.get('*', function (req, res) {
        res.render('index',{
            bsUser: req.user
        });
    });
    //DONE//
};