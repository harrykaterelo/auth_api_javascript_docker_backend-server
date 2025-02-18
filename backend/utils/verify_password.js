// helpers/verifyPassword.js

const verifyPassword = (password) => {
    // Password should be at least 8 characters long, contain an uppercase letter,
    // a number, and a special character
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (!password) {
      throw new Error("Password is required");
    }
  
    if (!passwordRegex.test(password)) {
      throw new Error("Password must contain at least 8 characters, one uppercase letter, one number, and one special character");
    }
  
    return true;  // Returns true if the password meets the requirements
  };
  
  module.exports = verifyPassword;
  