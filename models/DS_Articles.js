class DS_Articles {
  constructor() {
    this.storage = [];
    this.uri = '';
    this.initMockArticles();
  }
  initMockArticles() {
    this.storage.push({
      title: 'Beef or Pork',
      body:
        'Bacon ipsum dolor sit amet salami ham hock ham, hamburger corned beef short ribs kielbasa biltong t-bone drumstick tri-tip tail sirloin pork chop. Kielbasa turducken turkey cow shoulder pig prosciutto hamburger corned beef short loin, meatloaf tri-tip drumstick. Shankle sirloin ground round fatback, cow pancetta boudin t-bone pig. Ham short ribs cow tri-tip ribeye beef ribs boudin. Short ribs pork belly leberkas salami chuck, pork loin ball tip tenderloin turkey chicken pork chop filet mignon biltong.',
      author: 'Outback Steakhouse',
      uri: encodeURIComponent(this.title)
    });
    this.storage.push({
      title: 'Karate Guy',
      body:
        'Chuck ipsum. Multiple people have died from Chuck Norris giving them the finger. Chuck Norris doesn’t need to swallow when eating food. Crop circles are Chuck Norris way of telling the world that sometimes corn needs to lie the f*ck down. Chuck Norris ordered a Big Mac at Burger King, and got one.',
      author: 'Chuck Norris',
      uri: encodeURIComponent(this.title)
    });
  };

  getAllArticles(){
      return this.storage.slice();
  }

  getArticleByTitle(uri){
    let result;
    const selectedTitle = this.storage.forEach(element=>{
        if(element.uri == uri){
            result = element;
            return result;
        }
    }) 
    return result;
  }

}
module.exports = new DS_Articles();