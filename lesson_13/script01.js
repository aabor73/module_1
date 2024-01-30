'use strict';

var game = (function() {
  var score = {
    user: 0,
    computer: 0
  };

  var language = "RU";

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getLanguage() {
    var lang = prompt("Choose language (ENG/EN or leave blank for RU):");
    if (lang === "ENG" || lang === "EN") {
      language = "ENG";
    }
  }

  function showMessage(message) {
    if (language === "ENG") {
      alert(message);
    } else {
      alert("Результат: " + message);
    }
  }

  function makeMove(playerMove) {
    var computerMove = getRandomIntInclusive(1, 3);
    var result;

    // 1 - Rock, 2 - Scissors, 3 - Paper
    if (playerMove === computerMove) {
      result = "Draw";
    } else if (
      (playerMove === 1 && computerMove === 2) ||
      (playerMove === 2 && computerMove === 3) ||
      (playerMove === 3 && computerMove === 1)
    ) {
      result = "You win";
      score.user++;
    } else {
      result = "Computer wins";
      score.computer++;
    }

    showMessage(result);

    var nextMove = prompt(
      "Choose your next move (1 - Rock, 2 - Scissors, 3 - Paper):"
    );
    if (nextMove !== null) {
      makeMove(parseInt(nextMove));
    } else {
      var confirmExit = prompt("Are you sure you want to exit? (yes/no)");
      if (confirmExit === "yes") {
        showMessage("User score: " + score.user + ", Computer score: " + score.computer);
      } else {
        makeMove(playerMove);
      }
    }
  }

  return function(language) {
    if (language === "ENG" || language === "EN") {
      language = "ENG";
    } else {
      language = "RU";
    }

    getLanguage();

    var move = prompt("Choose your move (1 - Rock, 2 - Scissors, 3 - Paper):");
    makeMove(parseInt(move));
  };
})();
