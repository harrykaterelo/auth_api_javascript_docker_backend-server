const jwt = require('jsonwebtoken');
const UserCredentials = require('../database/models/userCredentialsModel');
const authenticateUserMiddleware = async  (req,res,next)=>{

    const token = req.header('Authorization')?.replace('Bearer ','')
    if(!token){
        return res.status(401).json({message:'Not authenticated'})
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await UserCredentials.findById(decoded.userId);
        if(!user){
            return res.status(404).json({message:'User not found'});
            
        }
        req.user = user;
        next()
    }
    catch(e){
        res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
    
}
module.exports = authenticateUserMiddleware;