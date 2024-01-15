'use strict';

// Функция calculate(), которая вычисляет стоимость корзины товаров
// после применения всех акций и скидок.

const calculate = (totalSum, count, promoCode) => {

if (count > 10) {
    totalSum = totalSum * 0.97;
}

const threshold = 30000;

if(totalSum > threshold) {
    const discount = (totalSum - threshold) * 0.15;

    totalSum -= discount;
}

if (promoCode === 'METHED') {
    totalSum *= 0.9;
} else if (promoCode === 'G3H2Z1') {
    if (totalSum > 2000) {
    totalSum -= 500;
    }
}

return totalSum;
}

const result = calculate(5000, 7, 'METHED');

console.log('result: ', result);