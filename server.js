'use strict';

var express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;


//Port validation
var env = process.env.NODE_ENV =  process.env.NODE_ENV || 'development';
//pv END

//TODO:refactor
var app = express();
var config = require('./server/config/config.js')[env];

require('./server/config/express.js')(app, config);
//DONE

require('./server/config/mongo.js')(config);
//DONE

var User = mongoose.model('User');

//TODO:implement passport
passport.use(new LocalStrategy(
    function (username, password, done) {
        User.findOne({userName:username}).exec(function (err, user) {
            if(user && user.authenticate(password))
                return done(null, user);
            else
                return done(null, false);
        });
    }
));

passport.serializeUser(function (user, done) {
    if(user){
        done(null, user._id);
    }
});

passport.deserializeUser(function (id, done) {
    User.findOne({_id:id}).exec(function (err, user) {
        if(user){
            return done(null, user);
        }else{
            return done(null, false);
        }
    })
});
//DONE

require('./server/config/route.js')(app);
//DONE

//TODO:to create a port for to listen
app.listen(config.port);
console.log("listning on port : " + config.port.toString() + "....");
//DONE//
//END OF APP//