'use strict';

{
  const botNumber = Math.round(Math.random() * 100);
  console.log(botNumber);

  const game = () => {
    let playerNumber = prompt('Угадай число');
    if (isNaN(playerNumber)) {
      alert('Вы ввели не число!');
      game();
    }

    if (playerNumber === null) {
      return false;
    }

    if (playerNumber > botNumber) {
      alert('Меньше!');
      game();
    } else if (playerNumber < botNumber) {
      alert('Больше!');
      game();
    } else {
      alert('Правильно!');
      return false;
    }
  };

  game();
}
