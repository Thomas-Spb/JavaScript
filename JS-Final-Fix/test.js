'use strict';

(() => {
  let playerBalls = 5;
  let botBalls = 5;
  let flag = 0;

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getPlayerNumber = number => {
    let playerNumber = +prompt(`Введите кол-во шаров от 1 до ${number}`);

    if (playerNumber === null || '') {
      alert(`Отмена игры \nКомпьютер: ${botBalls}\nИгрок: ${playerBalls}`);
      return false;
    } else if (checkNumber(playerNumber)) {
      alert('Введите число');
      return getPlayerNumber(number);
    } else if (playerNumber > number || playerNumber < 1) {
      alert('Введите число с нужного диапозона');
      return getPlayerNumber(number);
    }

    return +playerNumber;
  };

  game;
};

window.MARBLE = game;
})();