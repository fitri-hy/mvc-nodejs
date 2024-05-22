class ItemModel {
    constructor() {
        this.items = ['Item 1', 'Item 2', 'Item 3'];
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        this.items.push(item);
    }
}

module.exports = new ItemModel();
