const knex = require('knex')({
  client: 'pg',
  connection: {
      host: '127.0.0.1',
      user: 'articles_products_user',
      password:'Boardgamer',
      database:'articles_products'
  }
})

class DS_Products {
  constructor() {
    this.storage = [];
    this.idNum = 1;
  }
  
  getAllProducts() {
    return knex.raw('SELECT * from products')
      .then ( (data)=>{
        console.log('data.rows', data.rows);
        return data.rows
      })
    
  }

  getProductById(id) {
   return knex.raw(`SELECT * from products where id = ${id}`)
    .then ( (data)=>{

    })
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


// module.exports = [
//   {
//     name: 'Empire of the Void',
//     price: 69,
//     inventory: 4
//   },
//   {
//     name: 'Dungeon Alliance',
//     price: 79,
//     inventory: 1
//   },
//   {
//     name: 'Twilight Imperium',
//     price: 150,
//     inventory: 2
//   },
//   {
//     name: 'Kingdom Death',
//     price: 300,
//     inventory: 0
//   }
// ]