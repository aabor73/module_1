'use strict';

// Продолжаем работать с предыдущей функцией
// Функция принимает еще два параметра n и m
// Числа m и n формируют диапазон, в пределах
// которого должно сгенерироваться числа для массиваm и n включительно
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.

function generateRandomArray(n, m) {

    if (n > m) {
        [n, m] = [m, n];
        }

    const range = Math.abs(m - n) + 1;

	console.log(Array.from({
        length: 10
    },
        () => Math.floor(Math.random() * range) + n));
}

generateRandomArray(-5, 10);