const mongoose = require('mongoose');
const userCredentialsSchema = require('../schemas/userCredentialsSchema');
const UserCredentials = mongoose.model('UserCredentials',userCredentialsSchema);
module.exports = UserCredentials;