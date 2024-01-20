'use strict';

// Напишите функцию генератор  массива случайных чисел в файле task01.js
// Функция принимает один обязательный параметр это количество элементов в массиве и возвращает массив со случайными числами от одного до 100 включительно;

//---- Первый вариант -----

// function* generateRandomArray(size) {
//    for (let i = 0; i < size; i++) {
//    yield Math.floor(Math.random() * 101);
//    }
//    }

// const generatedArray = generateRandomArray(10);
// console.log(Array.from(generatedArray));

//---- Второй вариант -----

function generateRandomArray() {
	console.log(Array.from({
		length: 10
	}, () => Math.floor(Math.random() * 101)));
}
generateRandomArray();
