const express = require('express');
const router = express.Router();
const loginController = require('../controllers/auth/login');

router.get('/login',loginController.getLoginPage);

module.exports = router;