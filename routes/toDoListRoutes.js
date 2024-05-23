const express = require('express');
const router = express.Router();
const itemController = require('../controllers/toDoListController');

router.get('/to-do-list', itemController.getItems);
router.post('/to-do-list/add', itemController.addItem);
router.post('/to-do-list/edit', itemController.editItem);
router.post('/to-do-list/edit/:index', itemController.editItem);
router.post('/to-do-list/delete/:index', itemController.deleteItem);
module.exports = router;
