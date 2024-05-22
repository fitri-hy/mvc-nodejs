const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

router.get('/about', pageController.getAboutPage);
router.get('/contact', pageController.getContactPage);

module.exports = router;
