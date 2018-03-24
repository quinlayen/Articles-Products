class DS_Products {
    constructor(){
        this.storage =[];
        this.idNum = 1;
        this.initMockProducts();
    }
initMockProducts(){
    this.storage.push({
        id: this.idNum,
        name: 'Test item 1',
        price: '200',
        inventory: '1'
    })
    this.idNum++;
    this.storage.push({
        id: this.idNum,
        name: 'Test item 2',
        price: '100',
        inventory: 3
    })
}

getAllProducts(){
   return this.storage.slice();
}

getProductById(){
    let result;
    return this.storage.indexOf(this.idNum)
    console.log('idNum', this.idNum);
}

postNewItem(newItem){
    newItem.id = this.idNum++
    this.storage.push(newItem)
    console.log('this.storage', this.storage);
}

}
module.exports = new DS_Products()