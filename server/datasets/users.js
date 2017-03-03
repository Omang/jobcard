var mongoose = require('mongoose');

module.exports = mongoose.model('Users', {
    username: String,
    email: String,
    hash: String,
    salt: String,
    bio: String,
    profileImg: String
});