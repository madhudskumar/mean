'use strict';
var express = require('express');

//Port validation
var env = process.env.NODE_ENV =  process.env.NODE_ENV || 'development';
//pv END

//TODO:refactor
var app = express();
var config = require('./server/config/config.js')[env];

require('./server/config/express.js')(app, config);

require('./server/config/mongo.js')(config);

require('./server/config/passport.js')();

require('./server/config/route.js')(app);

//TODO:to create a port for to listen
app.listen(config.port);
console.log("listning on port : " + config.port.toString() + "....");
//DONE//
//END OF APP//