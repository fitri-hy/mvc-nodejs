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
