'use strict';

(() => {
const FIGURES_ENG = ['rock', 'scissors', 'paper'];
const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

function getRandomIntInclusive(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getFigure = (lang) => {
return lang === 'EN' || lang === 'ENG' ? FIGURES_ENG : FIGURES_RUS;
};

const game = (language) => {
const result = {
player: 0,
computer: 0,
};
const lang = language === 'EN' || language === 'ENG' ? 'EN' : 'RUS';

javascript
Copy code
const playRound = () => {
  const figures = getFigure(lang);
  const playerChoice = prompt(
    lang === 'EN'
      ? `Choose: ${FIGURES_ENG.join(', ')}`
      : `Выберите: ${FIGURES_RUS.join(', ')}`
  );

  if (playerChoice === null) {
    const confirmExit = confirm(
      lang === 'EN'
        ? 'Are you sure you want to quit?'
        : 'Вы уверены, что хотите выйти?'
    );
    if (confirmExit) {
      alert(
        lang === 'EN'
          ? `Game over! Player: ${result.player}, Computer: ${result.computer}`
          : `Игра окончена! Игрок: ${result.player}, Компьютер: ${result.computer}`
      );
    } else {
      playRound();
    }
  } else {
    const computerChoice = figures[getRandomIntInclusive(0, 2)];
    
    if (figures.includes(playerChoice.toLowerCase())) {
      const indexPlayer = figures.indexOf(playerChoice.toLowerCase());
      const indexComputer = figures.indexOf(computerChoice);

      if (indexPlayer === indexComputer) {
        alert(
          lang === 'EN'
            ? `It's a tie! Player: ${result.player}, Computer: ${result.computer}`
            : `Ничья! Игрок: ${result.player}, Компьютер: ${result.computer}`
        );
      } else if (
        (indexPlayer === 0 && indexComputer === 1) ||
        (indexPlayer === 1 && indexComputer === 2) ||
        (indexPlayer === 2 && indexComputer === 0)
      ) {
        result.player += 1;
        alert(
          lang === 'EN'
            ? `Player wins! Player: ${result.player}, Computer: ${result.computer}`
            : `Игрок победил! Игрок: ${result.player}, Компьютер: ${result.computer}`
        );
      } else {
        result.computer += 1;
        alert(
          lang === 'EN'
            ? `Computer wins! Player: ${result.player}, Computer: ${result.computer}`
            : `Компьютер победил! Игрок: ${result.player}, Компьютер: ${result.computer}`
        );
      }
    } else {
      alert(
        lang === 'EN'
          ? `Invalid choice. Please choose from: ${FIGURES_ENG.join(', ')}`
          : `Некорректный выбор. Пожалуйста, выберите из: ${FIGURES_RUS.join(', ')}`
      );
    }
    playRound();
  }
};

return playRound;
};

window.RSP = game;
})();

// script.js

const startGame = () => {
const langChoice = prompt(
'Choose language: EN or RU'
);

if (langChoice === 'EN') {
const playRound = RSP('EN');
playRound();
} else if (langChoice === 'RU') {
const playRound = RSP('RU');
playRound();
} else {
const playRound = RSP();
playRound();
}
};

startGame();

