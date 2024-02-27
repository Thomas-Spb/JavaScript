'use strict';

(() => {
  //   let endGame = 1;
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const checkNumber = num => {
    return isNaN(+num);
  };

  const getNumber = (playerBalls, botBalls) => (playerBalls > botBalls ? botBalls : playerBalls);

  const game = () => {
    let playerBalls = 5;
    let botBalls = 5;
    let flag = 0;

    const getPlayerNumber = number => {
      let playerNumber = prompt(`Введите кол-во шаров от 1 до ${number}`);

      if (playerNumber === null) {
        alert(`Отмена игры \nКомпьютер: ${botBalls}\nИгрок: ${playerBalls}`);
        return null;
      } else {
        if (checkNumber(playerNumber)) {
          alert('Введите число');
          return getPlayerNumber(number);
        }
        if (playerNumber > number || playerNumber < 1) {
          alert('Введите число с нужного диапозона');
          return getPlayerNumber(number);
        }

        return +playerNumber;
      }
    };

    const playerChosen = (playerNumber, botNumber) => {
      if (playerNumber % 2 === botNumber) {
        botBalls += playerNumber;
        playerBalls -= playerNumber;

        alert(`Вы проиграли \nБот загадал  ${botNumber} \n(0 - четное, 1 - не четное)
                        \nВаше число: ${playerNumber}`);
      } else {
        botBalls -= playerNumber;
        playerBalls += playerNumber;

        alert(`Вы выйграли \nБот загадал  ${botNumber} \n(0 - четное, 1 - не четное)
                        \nВаше число: ${playerNumber}`);
      }
    };

    const start = () => {
      const number = getNumber(playerBalls, botBalls);

      const playerNumber = getPlayerNumber(number);

      if (playerNumber === null) return;

      const botNumber = getRandomIntInclusive(0, 1);

      playerChosen(playerNumber, botNumber);

      if (playerBalls > 0 && botBalls > 0) {
        alert(`Очки ПК: ${botBalls}  \nОчки игрока: ${playerBalls}`);
        return start();
      } else {
        let answer = confirm('Играем еще?');
        if (answer) {
          playerBalls = 5;
          botBalls = 5;
          return start();
        } else {
          return;
        }
      }
    };
    start();
  };

  window.MARBLE = game;
})();
