const UserCredentials = require("../database/models/userCredentialsModel");

const jwt = require("jsonwebtoken");

exports.signInUser = async(req,res)=>{

    const { email, password } = req.body;

  try {
    // Find user credentials by email
    const userCredentials = await UserCredentials.findOne({ email });

    if (!userCredentials) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check if password matches
    const isMatch = await userCredentials.isPasswordMatch(password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign({ userId: userCredentials._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.status(200).json({
      message: 'Login successful',
      token,
      name: userCredentials.name, // Return the user profile as part of the response
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error logging in user' });
  }
}