class DS_Products {
  constructor() {
    this.storage = [];
    this.idNum = 1;
    this.initMockProducts();
  }
  initMockProducts() {
    this.storage.push({
      name: 'Test item 1',
      price: '$200',
      inventory: '1',
      id: this.idNum
    });
    this.idNum++;
    this.storage.push({
      name: 'Test item 2',
      price: '$100',
      inventory: 3,
      id: this.idNum
    });
    this.idNum++;
  }

  getAllProducts() {
    return this.storage.slice();
  }

  getProductById(id) {
    let result;
    const filteredId = this.storage.forEach(element => {
      if (element.id === id) {
        result = element;
        return result;
      }
    });
    return result;
  }

  createNewItem(newItem) {
    newItem.id = this.idNum++;
    this.storage.push(newItem);
    return newItem.id;
  }

  changeItemDetails(changeItem) {
    const itemToSelect = this.getProductById(changeItem);
    console.log('itemToSelect', itemToSelect);
  }
  
  deleteItem(id){
      return this.storage.splice(this.storage.indexOf(id), 1)
  }
}
module.exports = new DS_Products();
