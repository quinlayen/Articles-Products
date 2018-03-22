class DS_Products {
    constructor(){
        this.storage =[];
        this.idNum = 1;
    }

getAllProducts(){
   return this.storage.slice();
}

getProductById(){
    
}

}
module.exports = new DS_Products()