class ItemModel {
    constructor() {
        this.items = ['Hello !!', 'Welcome to HyTech MVC', 'Example To do List'];
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        this.items.push(item);
    }

    editItem(index, newItem) {
        this.items[index] = newItem;
    }

    deleteItem(index) {
        this.items.splice(index, 1);
    }
}

module.exports = new ItemModel();
