'use strict';

// Написать простой игровой бот, который умеет следующее:

// Загадывает число от 1 до 100;
// предлагает пользователю ввести свой вариант отгадки;
// если пользовательское число больше, чем загаданное, то бот выводит “Меньше!”
// и предлагает ввести новый вариант;
// если пользовательское число меньше, чем загаданное, то бот выводит “Больше!”
// и предлагает ввести новый вариант;
// если пользователь вводит правильное число, то бот выводит “Правильно!”;
// если пользователь ввел не число, то выводит “Введи число!”;
// если пользователь нажимает “Отмена”, то игра заканчивается.

const minNum = 1;
const maxNum = 100;
const hiddenNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = prompt(`Угадайте число от ${minNum} до ${maxNum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        alert(`Пожалуйста введите число!`);
    }
    else if (guess < minNum || guess > maxNum) {
        alert(`Пожалуйста введите число от ${minNum} до ${maxNum}!`);    
    }
    else {
        attempts++;
        if (guess > hiddenNum) {
            alert(`Меньше!`);
        }
        if (guess < hiddenNum) {
            alert('Больше!')
        }
        if (guess === hiddenNum) {
            alert(`Вы угадали правильно! Это число ${hiddenNum}!`);
            running = false;
        }        
    }    
}
