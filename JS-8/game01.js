'use strict';

{
  const botNumber = Math.round(Math.random() * 100);
  console.log(botNumber);
  let playerNumber = prompt('Угадай число');

  while (true) {
    if (isNaN(playerNumber)) {
      alert('Вы ввели не число!');
      playerNumber = prompt('Угадай число');
    }

    if (playerNumber === null) {
      break;
    }

    if (playerNumber > botNumber) {
      alert('Меньше!');
      playerNumber = prompt('Угадай число');
    } else if (playerNumber < botNumber) {
      alert('Больше!');
      playerNumber = prompt('Угадай число');
    } else {
      alert('Правильно!');
      break;
    }
  }
}
