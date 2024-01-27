'use strict';

// Создать объект rectangle, который описывает ширину и высоту
// (свойства width и height) прямоугольника
// Объект должен иметь 2 сеттера для записи ширины и высоты и два геттера
// для получения периметра и площади прямоугольникаСеттеры могут принимать
// только числаГеттеры возвращают строку число + "см", например "40см"
// По умолчанию значения высоты и ширины заданы 5 см

const rectangle = {
  width: 5,
  height: 5,

  setWidth(value) {
    if (typeof value === 'number') {
      this.width = value;
    }
  },

  setHeight(value) {
    if (typeof value === 'number') {
      this.height = value;
    }
  },

  getPerimeter() {
    return (this.width + this.height) * 2 + 'cm';
  },

  getArea() {
    return (this.width * this.height) + 'cm';
  },
};

console.log(rectangle.getPerimeter()); // 20cm
console.log(rectangle.getArea()); // 25cm
