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
        this.idNum++
    }
    
    getAllProducts(){
        return this.storage.slice();
    }
    
    getProductById(id){
        let result;
        const filteredId = this.storage.forEach(element =>{
        if(element.id === id){
            result = element;
            return result
        }  
        
    })
    return result
}

postNewItem(newItem){
    newItem.id = this.idNum++
    this.storage.push(newItem)
}

changeItemDetails(changeItem){
    const itemToSelect = this.getProductById(changeItem);
    console.log('itemToSelect', itemToSelect);
    
    
}

}
module.exports = new DS_Products()