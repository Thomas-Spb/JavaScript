'use strict';

(() => {
  let playerBalls = 5;
  let botBalls = 5;

  const getRandomIntInclusive = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const checkNumber = num => {
    return isNaN(num);
  };

  const getPlayerNumber = () => {
    let playerNumber = prompt(`Введите кол-во шаров от 1 до ${playerBalls}`);

    if (playerNumber === null) {
      return null;
    }

    if (checkNumber(playerNumber)) {
      alert('Введите число');
      return getPlayerNumber();
    }

    return playerNumber;
  };

  const game = () => {
    getPlayerNumber();
    return game;
  };

  window.MARBLE = game;
})();
