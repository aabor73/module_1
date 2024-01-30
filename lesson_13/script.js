'use strict';

const startGame = () => {
  const langChoice = prompt(
    'Выбирайте язык: EN или RU',
  );

  if (langChoice === 'EN' || langChoice === 'en') {
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

