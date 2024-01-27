'use strict';

// Переписать игровой бот из 8-го задания
// Функционал остаётся прежний, но вместо цикла (while или for) используйте рекурсию

const minNum = 1;
const maxNum = 100;
const hiddenNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

const game = () => {
  const answer = prompt(`Угадайте число от ${minNum} до ${maxNum}`);

  if (answer < hiddenNum) {
    alert('Больше!');
    game();
  } else if (answer > hiddenNum) {
    alert('Меньше!');
    game();
  } else {
    alert(`Вы угадали правильно! Это число ${hiddenNum}!`);
  }
};

game();
