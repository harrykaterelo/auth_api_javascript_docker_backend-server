// helpers/verifyEmail.js

// A regular expression to validate email format
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const verifyEmail = (email) => {
  if (!email) {
    throw new Error("Email is required");
  }

  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format");
  }

  return true;  // Returns true if the email format is correct
};

module.exports = verifyEmail;
