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

// console.log(rectangle.width + "cm"); // 5cm
// console.log(rectangle.height + "cm"); // 5cm
// console.log(rectangle.getPerimeter()); // 20cm
// console.log(rectangle.getArea()); // 25cm

// rectangle.setWidth(8);
// rectangle.setHeight(6);
// console.log(rectangle.width + "cm"); // 8cm
// console.log(rectangle.height + "cm"); // 6cm
// console.log(rectangle.getPerimeter()); // 28cm
// console.log(rectangle.getArea()); // 48cm

// rectangle.setWidth("invalid value");
// rectangle.setHeight(10);
// console.log(rectangle.width + "cm"); // 8cm (unchanged)
// console.log(rectangle.height + "cm"); // 10cm
// console.log(rectangle.getPerimeter()); // 36cm
// console.log(rectangle.getArea()); // 80cm (updated)

// В этом примере объект прямоугольника имеет свойства ширины и высоты
// со значениями по умолчанию, равными 5. Методы setWidth и setHeight
// используются для установки значений ширины и высоты соответственно,
// проверяя, что они являются числами.Метод getPerimeter вычисляет 
// периметр прямоугольника, а метод getArea вычисляет площадь прямоугольника.
// Значения возвращаются в виде строк с добавленной единицей измерения «см».
