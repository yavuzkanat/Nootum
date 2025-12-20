const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main');


// home page 
router.get('/',mainController.mainPage);

// about us
router.get('/about',mainController.aboutPage);


module.exports = router; 