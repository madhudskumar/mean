'use strict';
var express = require('express');
var jade = require('jade');
var stylus = require('stylus');
var bodyParser = require('body-parser');
var logger = require('express-logger');
var mongoose = require('mongoose');

//Port validation
var env = process.env.NODE_ENV =  process.env.NODE_ENV || 'development';
//pv END

//Start :: APP :: NODER
var app = express();

function compile(str, path){
    return stylus(str).set('filename' , path);
}
//DONE//

//TODO 1:configure express//
//SET
app.set('views', __dirname + '/server/views/');
app.set('view engine', 'jade');


//USE
app.use(stylus.middleware(
    {
       src: __dirname + '/public',
        compile : compile
    }
));

app.use(express.static(__dirname + '/public'));
app.use(logger({path: __dirname + '/logs'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//DONE//

//TODO:connect to mongoDB as of ~development in env or ~env.PORT
if(env == 'development'){
    mongoose.connect('mongodb://localhost/mean_demo');//local datbase
}else {
    mongoose.connect('mongodb://mkds:killer7!@ds039185.mongolab.com:39185/mean_demo');//mongolab
}
var db = mongoose.connection;
db.on('error', function () {
    console.error.bind(console, 'connection failure...');
});
db.once('open', function callback() {
    console.log('\nmean_demo connection open on ' + env.toString() + '\n')
});
//DONE

//test schema
var messageSchema = mongoose.Schema({message:String});
var Message = mongoose.model('Message',messageSchema);
var mongoMessage;
Message.findOne().exec(function (err, messageDoc) {
    if(err)
        throw(err);
    else
        mongoMessage = messageDoc.message;
});
//test end

//TODO:to setup routes//
app.get('/partials/:path', function (req, res) {
   res.render('partials/' + req.params.path);
});

//catch all route
app.get('*', function (req, res) {
    res.render('index',{
        mongoMessage : mongoMessage
    });
});
//DONE//

//TODO:to create a port for to listen
var port = process.env.PORT || 7777;
app.listen(port);
console.log("listning on port : " + port.toString() + "....");
//DONE//

//END OF APP//