
const express = require('express');
const { homeController } = require('../controllers/home_controller');
const authenticateUserMiddleware = require('../middleware/authenticate_user_middleware');

const homeRouter = express.Router();


homeRouter.get('/',authenticateUserMiddleware,homeController);

module.exports = homeRouter;

