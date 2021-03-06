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
    
  }
  
  getAllProducts() {
    return knex.raw('SELECT * FROM products')
      .then ( (data)=>{
        return data.rows;
      })
    
  }

  getProductById(id) {
   return knex.raw(`SELECT * FROM products WHERE product_id = ${id}`)
    .then ( (data)=>{
        return data.rows;
    })
      }
  

  createNewItem(newItem) {
    //console.log('newItem', newItem);
    return knex.raw(`INSERT INTO products VALUES (default, '${newItem.product_name}', ${newItem.product_price}, ${newItem.inventory_num})`)
    .then ( (data)=>{
        return data.rows;   
    })
    
  }

  changeItemDetails(itemID,changeItem) {
    //console.log('changeItem', changeItem);
    let query = '';
    for (let key in changeItem){
     query += ` ${key} = '${changeItem[key]}',`
    }
    query = query.substring(0,query.length-1);
    console.log('query', query);
   
    return knex.raw(`UPDATE products SET ${query} WHERE product_id = ${itemID}`)
    .then ( (data)=>{
      return data.rows;
    })
  }
  
  deleteItem(id){
      return knex.raw(`DELETE FROM products WHERE product_id = ${id}`)
      .then( (data)=>{
        return data.rows;
      })
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