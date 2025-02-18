const express = require('express');
const userRouterV1 = require('./routes/user_routes');
const homeRouter = require('./routes/home_router');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000; // Set the port for the server

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB using the URI from the environment variable
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });

// Routes
app.use('/api/v1/users', userRouterV1);
app.use('/api/v1/home', homeRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
