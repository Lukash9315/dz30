let fruits = [ 
{
    name: 'Банани',
    quantity: 6,
    bought: false,
    price: 10,
    totalPrice: function(){ 
      if (this.bought){
        return this.quantity * this.price;
      } else {
        console.log('not bought');
        return 0;
      }
    }
},
{
    name: 'Яблука',
    quantity: 5,
    bought: false,
    price: 5,
    totalPrice: function(){ 
      if (this.bought){
        return this.quantity * this.price;
      } else {
        console.log('not bought');
        return 0;
      }
    }
},
{    
    name: 'Апельсини',
    quantity: 5,
    bought: false,
    price: 7,
    totalPrice: function(){ 
      if (this.bought){
        return this.quantity * this.price;
      } else {
        console.log('not bought');
        return 0;
      }
    }
},
{
    name: 'Дині',
    quantity: 5,
    bought: false,
    price: 9,
    totalPrice: function(){ 
      if (this.bought){
        return this.quantity * this.price;
      } else {
        console.log('not bought');
        return 0;
      }
    }
},
{
    name: 'Ананаси',
    quantity: 5,
    bought: false,
    price: 10,
    totalPrice: function(){ 
      if (this.bought){
        return this.quantity * this.price;
      } else {
        console.log('not bought');
        return 0;
      }
    }
}
];
let a =prompt(`Введіть назву продукту`)
buyProduct(a);
function buyProduct(productName) {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].name === productName) {
      fruits[i].bought = true;
      console.log(`Продукт "${productName}" придбано!`);
      return;
    }
  }
  console.log(`Продукт "${productName}" не знайдено.`);
}

// buyProduct(a);


const notBought =fruits.filter(fruit => fruit.bought == false);
notBought.forEach(fruit => {
  console.log(`${fruit.name}`);
});

const bought = fruits.filter(fruit => fruit.bought == true);

bought.forEach(fruit => {
  console.log(`${fruit.name}: Ціна - ${fruit.totalPrice()} грн`);
});
