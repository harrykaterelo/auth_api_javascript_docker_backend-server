const { ErrorFormat } = require("./error_format");


exports.authErrors = {

    UNKNOWN_ERROR:ErrorFormat.format(
        5000,
        'An unknown error occures!',
       ['Please contact development team']),


    INVALID_PASSWORD:ErrorFormat.format(4001,'Invalid password',['Make sure password matches the email you provided']),

    EMAIL_ALREADY_EXISTS:ErrorFormat.format(
        6000,
        'User already exists',
        ['choose another email']
    ),
    EMAIL_DOESNT_EXIST:ErrorFormat.format(
        6001,
        'Email doesnt exit',
        ['sign up first or check email field again']
    ),
    MISSING_EMAIL_FIELD:ErrorFormat.format(
        7001,
        'email field missing',
        ['Please check that the user has filled the email field']
    ),
    MISSING_PASSWORD_FIELD:ErrorFormat.format(
        7002,
        'password field missing',
        ['Please check that the user has filled the password field']
    ),
    INCORRECT_PASSWORD_FORMAT:ErrorFormat.format(
        7003,
        'password should meet proper specifications',
        ['Please check that the user has filled the password field correctly']
    ),
    INCORRECT_EMAIL_FORMAT:ErrorFormat.format(
        7004,
        'email should meet proper specifications',
        ['Please check that the user has filled the email field correctly']
    ),

    
}