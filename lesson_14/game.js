'use strict';

const gameModule = (() => {
  let playerBalls = 5;
  let botBalls = 5;

  const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const playerTurn = () => {
    const input = parseInt(prompt(
      'Введите число шариков от 1 до ' + playerBalls));
    if (isNaN(input) || input < 1 || input > playerBalls) {
      alert('Некорректный ввод! Попробуйте еще раз.');
      return playerTurn();
    }
    return input;
  };

  const botTurn = () => {
    // 0 - угадывает четное, 1 - угадывает нечетное
    const guess = getRandomInt(0, 1);
    if ((playerBalls % 2 === 0 && guess === 0) ||
            (playerBalls % 2 !== 0 && guess === 1)) {
      console.log('Бот угадал!');
      botBalls += playerBalls;
      playerBalls = 0;
    } else {
      console.log('Бот не угадал!');
      playerBalls += botBalls;
      botBalls = 0;
    }
  };

  const gameOver = () => {
    if (playerBalls === 0) {
      console.log('Вы проиграли! У вас закончились шарики.');
    } else {
      console.log('Вы выиграли! У бота закончились шарики.');
    }
  };

  return {
    startGame: () => {
      if (playerBalls > 0 && botBalls > 0) {
        const input = playerTurn();
        playerBalls -= input;
        botTurn();
        console.log('У вас осталось ' + playerBalls + ' шариков');
        console.log('У бота осталось ' + botBalls + ' шариков');
      }
      gameOver();
    },
  };
})();

gameModule.startGame();
