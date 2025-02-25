const UserCredentials = require("../database/models/userCredentialsModel");

const jwt = require("jsonwebtoken");
const signToken = require("../utils/sign_token");
const apiErrors = require("../error_handling/errors");
const apiResponse = require("../utils/api_response");
const errorUtils = require("../error_handling/error_format");
const createResponse = errorUtils.createRes
exports.signInUser = async(req,res,httpMethod,URI)=>{

    const { email, password } = req.body;

  try {
    // Find user credentials by email
    const userCredentials = await UserCredentials.findOne({ email });

    if (!userCredentials) {
      return apiResponse.notFoundResponse(res,
        createResponse('Not found error',httpMethod,URI,[
        apiErrors.authErrors.EMAIL_DOESNT_EXIST
      ]));
    }

    // Check if password matches
    const isMatch = await userCredentials.isPasswordMatch(password);

    if (!isMatch) {
      return apiResponse.validationErrorData(res,createResponse('Invalid password',httpMethod,URI,[
        apiErrors.authErrors.INVALID_PASSWORD
      ]));
    }

    // Create JWT token
    const token = await signToken(userCredentials._id);

    return res.status(200).json({
      message: 'Login successful',
      token,
      name: userCredentials.name, // Return the user profile as part of the response
    });
  } catch (error) {
    console.error(error);
    return apiResponse.errorResponse(res,createResponse('Unknown server error',httpMethod,URI,[
      apiErrors.authErrors.UNKNOWN_ERROR
    ]));
  }
}