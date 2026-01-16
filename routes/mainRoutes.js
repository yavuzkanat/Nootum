const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main');



//home-page 
router.get('/',mainController.mainPage);

//about-us
router.get('/about-us',mainController.aboutPage);

//privacy
router.get('/privacy',mainController.privacyPage);

module.exports = router; 