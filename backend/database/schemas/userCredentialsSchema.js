const mongoose = require('mongoose');


const bcrypt = require('bcryptjs'); // For hashing passwords

const userCredentialsSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
      },
      password: {
        type: String,
        required: true,
        minlength: 6
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    
  },
  
);

// Hash password before saving the user credentials
userCredentialsSchema.pre('save', async function (next) {
  const userCredentials = this;

  if (!userCredentials.isModified('password')) {
    return next();
  }

  // Hash the password with bcrypt
  const salt = await bcrypt.genSalt(10);
  userCredentials.password = await bcrypt.hash(userCredentials.password, salt);

  next();
});

// Method to compare hashed password during login
userCredentialsSchema.methods.isPasswordMatch = async function (password) {
  const userCredentials = this;
  return bcrypt.compare(password, userCredentials.password);
};

module.exports = userCredentialsSchema;