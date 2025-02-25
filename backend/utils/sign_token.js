const jwt = require('jsonwebtoken');
const signToken = async(id)=>{
    const token = jwt.sign({ userId: id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
}

module.exports = signToken;