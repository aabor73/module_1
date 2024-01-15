'use strict';

// Функция конвертер, которая на вход принимает стоимость покупки в евро
// и выводит результат в рублях

const convertEuroToRubles = (euroCost) => {
const dollarCost = euroCost * 1.2;
const rubleCost = dollarCost * 64;

return rubleCost;
}

console.log(convertEuroToRubles(100));