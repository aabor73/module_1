'use strict';

// Продолжим работу в cart.js из предыдущего урока
// Методы объекта cart не должны обращаться к объекту по имени
// В объект cart добавьте сеттер setDiscount и свойство discount
// Сеттер setDiscount будет принимать promocode
// если promocode будет строка METHED,
// то в discount будет добавляться значение 15
// если promocode будет строка NEWYEAR,
// то в discount будет добавляться значение 21
// метод calculateItemPrice должен учитывать скидку
// равную процентному значению discount

const cart = {
  items: [],
  count: 0,
  discount: 0,

  get totalPrice() {
    return this.calculateItemsPrice();
  },

  setDiscount(promoCode) {
    if (promoCode === 'METHED') {
      this.discount = 15;
    } else if (promoCode === 'NEWYEAR') {
      this.discount = 21;
    }
  },

  calculateItemsPrice() {
    const discountedPrice = this.items.reduce(
      (total, item) =>
        total + item.price * item.quantity, 0,
    );
    return discountedPrice - (discountedPrice * this.discount) / 100;
  },

  increaseCount(number) {
    this.count += number;
  },

  add(name, price, quantity = 1) {
    const newItem = {
      name,
      price,
      quantity,
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
  },
};

// Применение:
cart.setDiscount = 'METHED';
cart.add('Item1', 12, 6);
console.log(cart.totalPrice); // Вывод: 72

cart.setDiscount = 'NEWYEAR';
cart.add('Item2', 8, 11);
console.log(cart.totalPrice); // Вывод: 160
