const itemModel = require('../models/toDoListModel');

exports.getItems = (req, res) => {
    const items = itemModel.getItems();
    res.render('to-do-list', { 
        items,
        seoTitle: 'Todo List - HyTech MVC',
		seoDesc: 'HyTech MVC JavaScript is a framework designed to simplify the development of JavaScript-based web applications by implementing the Model-View-Controller (MVC) architectural pattern.',
		seoKeyword: 'mvc, hytech, javascript, framework'
    });
};

exports.addItem = (req, res) => {
    const newItem = req.body.newItem;
    if (newItem) {
        itemModel.addItem(newItem);
    }
    res.redirect('/to-do-list');
};

exports.editItem = (req, res) => {
    const index = req.body.editIndex;
    const newItem = req.body.editItem.trim();
    if (index !== undefined && newItem !== "") {
        itemModel.editItem(index, newItem);
    }
    res.redirect('/to-do-list');
};

exports.deleteItem = (req, res) => {
    const index = req.params.index;
    itemModel.deleteItem(index);
    res.redirect('/to-do-list');
};
