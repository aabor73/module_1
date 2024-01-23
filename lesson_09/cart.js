'use strict';

// function calculateTotalPrice(items) {
//    let totalPrice = 0;
 
//    items.forEach(({ name, price }) => {
//      totalPrice += price;
//    });
 
//    return totalPrice;
//  }
 
//  function increaseItemCount(items, count) {
//    return items.map(({ name, quantity }) => ({
//      ...{ name },
//      quantity: quantity + count,
//    }));
//  }
 
//  function addItemToCart(items, productName, productPrice, quantity) {
//    const newItem = { name: productName, price: productPrice, quantity };
 
//    const updatedItems = [...items, newItem];
 
//    return calculateTotalPrice(updatedItems);
//  }
 
//  function printCart(items) {
//    console.log(items.map(({ name, quantity, price }) => `${name} x${quantity} - ${price}`).join("\n"));
//  }
 
//  // Пример использования
//  const items = [
//    { name: "Apple", price: 2, quantity: 1 },
//    { name: 'Orange', price: 3, quantity: 2 },
// ];

// console.log(`Общая стоимость корзины: ${calculateTotalPrice(items)}`);

// const newItems = increaseItemCount(items, 1);
// console.log(`Количество товаров увеличено: ${newItems.map(({ quantity }) => quantity)}`);

// console.log('------------');
// const totalAfterAddingApple = addItemToCart(items, 'Apple', 2, 1);

// console.log(`Общая стоимость после добавления Apple: ${totalAfterAddingApple} (с учетом добавленного количества)`);
// console.log('------------');
// printCart(items);


// Этот код создает функции для работы с корзиной без использования классов. Функции принимают на вход массив товаров и возвращают рассчитанную общую стоимость корзины, обновленный массив товаров с увеличенным количеством или новый массив товаров после добавления нового товара.

// Создание объекта cart
// const cart = {
//    items: [],
//    totalPrice: 0,
//    count: 0,
   
//    getTotalPrice() {
//      return this.totalPrice;
//    },
   
//    calculateItemPrice() {
//      this.totalPrice = this.items.reduce((total, item) => total + item.price * item.quantity, 0);
//    },
   
//    increaseCount(number) {
//      this.count += number;
//    },
   
//    add(name, price, quantity = 1) {
//      const newItem = {
//        name: name,
//        price: price,
//        quantity: quantity
//      };
     
//      this.items.push(newItem);
//      this.increaseCount(quantity);
//      this.calculateItemPrice();
//    },
   
//    clear() {
//      this.items = [];
//      this.totalPrice = 0;
//      this.count = 0;
//    },
   
//    print() {
//      console.log(JSON.stringify(this.items));
//      console.log("Total Price: " + this.totalPrice);
//    }
//  };
 
//  // Пример использования
//  cart.add("Item 1", 10, 2);
//  cart.add("Item 2", 20);
//  cart.add("Item 3", 30, 3);
 
//  cart.print();

//  Создаем объект cart, который содержит свойства items, totalPrice, count и методы getTotalPrice, calculateItemPrice, increaseCount, add, clear, print.

// В методе getTotalPrice просто возвращаем значение свойства totalPrice.

// В методе calculateItemPrice перебираем массив items с помощью метода reduce и вычисляем общую стоимость всех товаров, умножая цену каждого товара на его количество. Затем обновляем свойство totalPrice полученным значением.

// В методе increaseCount увеличиваем значение свойства count на заданное число.

// Метод add принимает три аргумента: название товара name, цену price и количество quantity. Если количество не указано, по умолчанию оно равно 1. Внутри метода создается новый объект товара newItem с указанными параметрами. Затем этот объект добавляется в конец массива items с помощью метода push. После этого увеличиваем свойство count на количество quantity и вычисляем общую стоимость товаров с помощью метода calculateItemPrice.

// Метод clear очищает корзину: очищает массив items и устанавливает свойства totalPrice и count в 0.

// Метод print выводит содержимое корзины на консоль. Сначала он выводит содержимое массива items в виде JSON, а затем выводит общую стоимость товаров.


const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrise () {
    return this.totalPrice;
  },
  
  calculateItemsPrice () {
    this.totalPrice = this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  },

  increaseCount (number) {
    this.count += number;
  },

  add (name, price, quantity = 1) {
    const newItem = {
      name: name,
      price: price,
      quantity: quantity,
    };

    this.items.push(newItem);
    this.increaseCount(quantity);
    this.calculateItemsPrice();
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Total Price: ${this.totalPrice}`);
  }  
};

// Пример использования

cart.add('Item 1', 10, 2);
cart.add('Item 2', 20);
cart.add('Item 3', 3, 30);

cart.print();