'use strict';

//Функция, которая принимает строку и возвращает обратную строку

// const invertString = (str) => {
//     return str.split('').reverse().join('');
//     }    
    
//     let originalString = 'Привет мир!';
//     const invertedString = invertString(originalString);
// console.log('Инвертированная строка: ', invertedString);

// Улучшенный вариант

const invertString = str => str.split('').reverse().join('');    
console.log('Инвертированная строка: ', invertString('Привет мир!'));
