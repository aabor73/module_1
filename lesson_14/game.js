'use strict';

// IIFE module
(() => {
  // Переменные для хранения количества шаров дляигрока и бота
  let playerBalls = 5;
  let botBalls = 5;

  // Функция для игры «Камень, ножницы, бумага»
  const playRPS = () => {
    // Массив для хранения вариантов «Камень, ножницы, бумага».
    const options = ['камень', 'бумага', 'ножницы'];

    // Случайный выбор варианта для бота
    const botOption = options[Math.floor(Math.random() * options.length)];

    // Предложение выбора игроку
    const playerOption =
      prompt('Напиши камень, ножницы или бумага').toLowerCase();

    // Проверка того, кто победит в игре «Камень, ножницы, бумага»
    if (playerOption === 'камень' && botOption === 'ножницы' ||
            playerOption === 'бумага' && botOption === 'камень' ||
            playerOption === 'ножницы' && botOption === 'бумага') {
      alert('Вы выиграли! Ваш первый ход в игре "Марблы"');
      return 'player';
    } else if (botOption === 'камень' && playerOption === 'ножницы' ||
            botOption === 'бумага' && playerOption === 'камень' ||
            botOption === 'ножницы' && playerOption === 'бумага') {
      alert('Бот выигрывает и делает первый ход в игре "Марблы"');
      return 'bot';
    } else {
      alert('Ничья! Сыграем еще?');
      return playRPS();
    }
  };

  // Функция для игры в Marbles
  const playMarbles = () => {
    playRPS(); // Начинаем игру с игры «Камень, ножницы, бумага»
    let playerGuess; let botGuess;
    let playerBallsLost; let botBallsLost; let winner;
    // Игра продолжается пока у одного из игроков не закончатся шарики.
    while (playerBalls > 0 && botBalls > 0) {
      // Предлагаем игроку угадать число шариков
      playerGuess = parseInt(prompt('Угадай количество шариков от 1 до 5'));

      // Генерация случайного предположения для бота
      botGuess = Math.floor(Math.random() * botBalls) + 1;

      // Проверяем, правильно ли угадает бот
      if (botGuess % 2 === 0) {
        // Бот угадал четное, отнимаем у бота угаданные шары и прибавляем игроку
        botBallsLost = botGuess;
        playerBallsLost = playerGuess;
        botBalls -= botBallsLost;
        playerBalls += playerBallsLost;
      } else {
        // Бот угадал нечетное, вычитаем шары у игрока и добавляем к боту
        botBallsLost = botGuess;
        playerBallsLost = playerGuess;
        playerBalls -= playerBallsLost;
        botBalls += botBallsLost;
      }

      // Оповещение о текущем количестве шариков у обоих игроков
      alert(`У бота ${botBalls} шариков\nУ игрока ${playerBalls} шариков`);
    }

    // Определяем победителя
    if (playerBalls === 0) {
      winner = 'Бот';
    } else {
      winner = 'Игрок';
    }

    // Оповещение о текущем количестве шариков у обоих игроков
    alert(`${winner} выиграл!
    — У бота ${botBalls} шариков.
    — У игрока ${playerBalls} шариков.`);

    // Подсказка, хочет ли игрок сыграть еще раз
    const playAgain = confirm('Хотите сыграть еще раз?');

    // Перезапуск игры, если игрок решит сыграть еще раз
    if (playAgain) {
      playerBalls = 5;
      botBalls = 5;
      playMarbles();
    }
  };

  // Начало игры
  playMarbles();
})();
