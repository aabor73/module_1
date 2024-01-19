'use strict';

// Напишите функцию addPrefix
// Функция получает массив в виде параметров и возвращает массив с префиксами
// После префикса пробел добавляется автоматически


const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = names.map(prefix => `Mr ${prefix}`);

console.log(addPrefix);