var express = require('express');
var router = express.Router();

const usersController = require('../controller');

// * POST /users/login
router.post('/login', usersController.Login);

// * POST /users/logout
router.post('/logout', usersController.Logout);

// * get /users/userinfo
router.post('/signup', usersController.Signup);

module.exports = router;
