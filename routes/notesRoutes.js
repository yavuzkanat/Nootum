const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notes/list');


router.get('/feed',notesController.getNotesFeed);

module.exports = router;



