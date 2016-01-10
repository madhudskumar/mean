var jade = require('jade'),
    auth = require('./auth');

module.exports = function (app) {
    //TODO:to setup routes//
    app.get('/partials/*', function (req, res) {
        res.render('../../public/app/' + req.params[0]);
    });

    //TODO:post for passport
    app.post('/login', auth.authenticate);
    //done

    //catch all route
    app.get('*', function (req, res) {
        res.render('index');
    });
    //DONE//
};