const express = require('express');
const { signUpUser } = require('../controllers/sign_up');
const { signInUser } = require('../controllers/sign_in');

const userRouterV1 = express.Router();

const signUpController = signUpUser;
const signInController = signInUser;

userRouterV1.post('/signUp',signUpController);

userRouterV1.post('/signIn',(req,res)=>{
    return signInController(req,res,req.method,req.url);
});

module.exports  = userRouterV1;