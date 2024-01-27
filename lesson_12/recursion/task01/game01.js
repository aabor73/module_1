'use strict';

// Переписать игровой бот из 8-го задания
// Функционал остаётся прежний, но вместо цикла (while или for) используйте рекурсию

const minNum = 1;
const maxNum = 100;
const hiddenNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

const game = () => {
  const answer = prompt(`Угадайте число от ${minNum} до ${maxNum}`);
  if (isNaN(answer)) {
    alert('Пожалуйста введите число!');
  } else if (answer < hiddenNum) {
    alert('Больше!');   
  } else if (answer > hiddenNum) {
    alert('Меньше!');   
  } else {
    alert(`Вы угадали правильно! Это число ${hiddenNum}!`);
  }
  return game();
};

game();
