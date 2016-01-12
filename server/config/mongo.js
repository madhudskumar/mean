var mongoose = require('mongoose'),
    crypto = require('crypto');

module.exports = function (config) {
    //TODO:connect to mongoDB as of ~development in env or ~env.PORT
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', function () {
        console.error.bind(console, 'connection failure...');
    });
    db.once('open', function callback() {
        console.log('\nmean_demo connection open on ' + config.db.toString() + '\n')
    });

    //TODO:user authentication and authorisation
    var userSchema = mongoose.Schema({
        firstName:String,
        lastName:String,
        userName:String,
        salt: String,
        hash_pwd:String,
        roles:[String]
    });

    userSchema.methods = {
        authenticate: function (ptm) {
             return hashPWD(this.salt ,ptm) === this.hash_pwd
        }
    };

    var User = mongoose.model('User', userSchema);

    User.find({}).exec(function (err, collection) {
        if(err) throw err;

        if(collection.length === 0){
            var salt = createSalt();
            var hash = hashPWD(salt,'mkds');
            User.create({firstName:'Madhu',lastName:'D S',userName:'mkds', salt:salt, hash_pwd:hash, roles:['admin']});

            salt = createSalt();
            hash = hashPWD(salt,'geethads');
            User.create({firstName:'Geetha',lastName:'D S',userName:'geethads', salt:salt, hash_pwd:hash, roles:[]});
        }
    })
};

function createSalt() {
    return crypto.randomBytes(128).toString('base64');
}

function hashPWD(salt, pwd){
    var hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pwd).digest('hex');
}