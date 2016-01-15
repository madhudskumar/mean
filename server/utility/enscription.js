crypto = require('crypto');

exports.createSalt = function () {
    return crypto.randomBytes(128).toString('base64');
};

exports.hashPWD =  function (salt, pwd){
    var hmac = crypto.createHmac('sha1', new Buffer(salt,'utf8'));
    return hmac.update(pwd).digest('hex');
};