'use strict';

// Продолжим работу с cart.js
// Обнаружена уязвимость в нашем функционале
// Если после добавления последнего товара присвоить к totalPrice любое значение,
// например
// cart.totalPrice = 10;
// то при выводе print() общая стоимость корзины будет равна 10
// Чтобы это предотвратить, необходимо свойство totalPrice сделать геттером который
// будет возвращать результат вызова метода calculateItemPrice
// метод getTotalPrice больше не нужен
// calculateItemPrice переделать таким образом, чтобы сумму он возвращал, а не
// записывал в свойство totalPrice
// Вызов метода calculateItemPrice оставить только у геттера totalPrice

const cart = {
items: [],
count: 0,

get totalPrice() {
return this.calculateItemsPrice();
},

calculateItemsPrice() {
return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
},

increaseCount(number) {
this.count += number;
},

add(name, price, quantity = 1) {
const newItem = {
name: name,
price: price,
quantity: quantity,
};

this.items.push(newItem);
  this.increaseCount(quantity);
  
},

clear() {
this.items = [];
this.count = 0;
},

print() {
console.log(JSON.stringify(this.items));
console.log(`Total Price: ${this.totalPrice}`);
}

};

// Пример использования
cart.add('Item 1', 5, 3);
cart.add('Item 2', 15);
cart.add('Item 3', 2, 25);

cart.print();