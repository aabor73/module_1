'use strict';

// Функция, которая принимает строку и возвращает модифицированную строку

const capitalizeFirstLetter = (str) => {
return str[0].toUpperCase() + str.slice(1);
}

let input = 'привет Мир';
const output = capitalizeFirstLetter(input);
console.log(output);