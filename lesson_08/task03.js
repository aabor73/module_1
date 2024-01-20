'use strict';

// Добавьте 4-ый опциональный параметр у функции
// 4-ый опциональный параметр это строка:
// если функция получает 'even', то функция возвращает массив чётных чисел
// если функция получает 'odd', то функция возвращает массив нечётных чисел

function generateRandomArray(n, m, evenOrOdd = 'even') {
    if (n > m) {
        [n, m] = [m, n];
    }
    const range = m - n + 1;

    let arr = Array.from({length: 10}, () => {
        let num = Math.floor(Math.random() * range) + n;

    if(evenOrOdd === 'even' && num % 2 !== 0 || evenOrOdd === 'odd' && num % 2 === 0) {
        num += 1;
        }
        
        return num;
})

    console.log(arr);
}
generateRandomArray(1, 10, 'even');
