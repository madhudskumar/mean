var mongoose = require('mongoose'),
    enscript = require('../utility/enscription');

//TODO:user authentication and authorisation
var userSchema = mongoose.Schema({
    firstName:{type:String, required:'{PATH} is required'},
    lastName:{type:String, required:'{PATH} is required'},
    userName:{
        type:String,
        required:'{PATH} is required',
        unique:true
    },
    salt: {type:String, required:'{PATH} is required'},
    hash_pwd:{type:String, required:'{PATH} is required'},
    roles:[String]
});

userSchema.methods = {
    authenticate: function (ptm) {
        return enscript.hashPWD(this.salt ,ptm) === this.hash_pwd
    },
    hasRole: function (role) {
        return this.roles.indexOf(role) > -1;
    }
};

var User = mongoose.model('User', userSchema);

function createDefaultUsers() {

    User.find({}).exec(function (err, collection) {
        if (err) throw err;

        if (collection.length === 0) {
            var salt = enscript.createSalt();
            var hash = enscript.hashPWD(salt, 'mkds');
            User.create({
                firstName: 'Madhu',
                lastName: 'D S',
                userName: 'mkds',
                salt: salt,
                hash_pwd: hash,
                roles: ['admin']
            });

            salt = enscript.createSalt();
            hash = enscript.hashPWD(salt, 'geethads');
            User.create({
                firstName: 'Geetha',
                lastName: 'D S',
                userName: 'geethads',
                salt: salt,
                hash_pwd: hash,
                roles: []
            });
        }
    });
}

exports.createDefaultUsers = createDefaultUsers;