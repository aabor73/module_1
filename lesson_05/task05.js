'use strict';

// Функцию, вычисляющая наибольший общий делитель двух чисел

function gcd(a, b) {
    while (b) {
        a = a % b;
        const temp = a;
        a = b;
        b = temp;
    }
    return a;
}

// Пример использования

console.log(gcd(18, 21)); // 3 
console.log(gcd(45, 90)); // 15