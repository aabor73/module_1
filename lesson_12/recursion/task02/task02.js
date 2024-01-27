'use strict';

const generateArray = (arr) => {
  // генерируем случайное число от 0 до 10
  const randomNumber = Math.floor(Math.random() * 11);
  arr.push(randomNumber); // добавляем число в массив

  // вычисляем сумму всех элементов массива
  const sum = arr.reduce((a, b) => a + b, 0);

  if (sum < 50) {
    return generateArray(arr); // запускаем функцию снова, передавая себе массив
  } else {
    return arr; // возвращаем массив, если сумма 50 или больше
  }
};

// пример использования:
const myArray = [];
const result = generateArray(myArray);
console.log(result);
