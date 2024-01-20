'use strict';

// Напишите функцию генератор  массива случайных чисел в файле task01.js
// Функция принимает один обязательный параметр это количество элементов в массиве и возвращает массив со случайными числами от одного до 100 включительно;

function generateRandomArray() {
	console.log(Array.from({
		length: 10
	}, () => Math.floor(Math.random() * 101)));
}
generateRandomArray();
