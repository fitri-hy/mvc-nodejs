const itemModel = require('../models/toDoListModel');

exports.getItems = (req, res) => {
    const items = itemModel.getItems();
    res.render('index', { items });
};

exports.addItem = (req, res) => {
    const newItem = req.body.newItem;
    if (newItem) {
        itemModel.addItem(newItem);
    }
    res.redirect('/');
};

exports.editItem = (req, res) => {
    const index = req.body.editIndex;
    const newItem = req.body.editItem.trim(); // Trim whitespace from the edited item
    if (index !== undefined && newItem !== "") {
        itemModel.editItem(index, newItem);
    }
    res.redirect('/');
};

exports.deleteItem = (req, res) => {
    const index = req.params.index;
    itemModel.deleteItem(index);
    res.redirect('/');
};
