const express = require('express');
const router = express.Router();
const itemController = require('../controllers/toDoListController');

router.get('/', itemController.getItems);
router.post('/add', itemController.addItem);
router.post('/edit', itemController.editItem);
router.post('/edit/:index', itemController.editItem);
router.post('/delete/:index', itemController.deleteItem);
module.exports = router;
