const UserCredentials = require("../database/models/userCredentialsModel");
const signToken = require("../utils/sign_token");
const verifyEmail = require("../utils/verify_email");
const verifyPassword = require("../utils/verify_password");


exports.signUpUser = async (req,res)=>{

const {name,email,password} =req.body;
console.log(req.body);
console.log(email);
console.log(password);
try{
    verifyEmail(email);
   
    
    const existingUser = await UserCredentials.findOne({email});
    console.log('here 1');
    if(existingUser){
        
        return res.status(400).json({message:'User already exists'})
    }
    console.log('here 2');
    const newUser = new UserCredentials({email:email,password:password,name:name});
    console.log('here 3');
    await newUser.save();
    const token  = await signToken(newUser._id);
    res.status(200).json({'message':'User created','token':token});
}
catch(e){
    console.log('here'+e);
    return res.status(500).json({'e':e});
}

}