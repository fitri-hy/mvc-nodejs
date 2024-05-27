const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');
const adminController = require('../controllers/adminController');

router.get('/', pageController.getHomePage);
router.get('/about', pageController.getAboutPage);
router.get('/to-do-list', pageController.getToDoListPage);

router.get('/admin', adminController.getAdminPage);

module.exports = router;
