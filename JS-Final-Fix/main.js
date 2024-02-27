'use strict';

(() => {
  let playerBalls = 5;
  let botBalls = 5;
  let flag = 0;
  //   let endGame = 1;

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const checkNumber = num => {
    return isNaN(+num);
  };

  const getPlayerNumber = number => {
    let playerNumber = +prompt(`Введите кол-во шаров от 1 до ${number}`);

    if (playerNumber === null || '') {
      alert(`Отмена игры \nКомпьютер: ${botBalls}\nИгрок: ${playerBalls}`);
      return false;
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

  const getPlayerNumberChoose = () => {
    let playerNumberChoose = prompt('Введите 0 или 1 (четное или не четное число)');
    console.log('Польователь угадывает: ', playerNumberChoose);

    if (playerNumberChoose === null) {
      (playerBalls = 0), (botBalls = 0);
      //   alert(`Отмена "МЫ тут" игры \nКомпьютер: ${botBalls}\nИгрок: ${playerBalls}`);

      return false;
    }
    debugger;
    if (checkNumber(playerNumberChoose)) {
      alert('Введите число');
      return getPlayerNumber();
    }

    if (playerNumberChoose === '' || playerNumberChoose < 0 || playerNumberChoose > 1) {
      alert('Введите число от 0 до 1');
      return getPlayerNumberChoose();
    }

    return +playerNumberChoose;
  };

  let number = 0;

  const game = (playerBalls = 5, botBalls = 5) => {
    flag = 0;
    let botNumber = 0;
    let playerNumber = 0;
    // start();

    const playerChosen = () => {
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

      flag++;
    };

    const botChosen = (playerNumberChoose, botNumberRandom) => {
      if (playerNumberChoose === 0 || 1) {
        if (botNumberRandom % 2 === playerNumberChoose) {
          botBalls -= botNumberRandom;
          playerBalls += botNumberRandom;

          alert(`Вы выйграли \nБот загадал  ${botNumberRandom} 
        \nВаше число: ${playerNumberChoose} \n(0 - четное, 1 - не четное)`);
        } else {
          botBalls += botNumberRandom;
          playerBalls -= botNumberRandom;

          alert(`Вы проиграли \nБот загадал  ${botNumberRandom}  
        \nВаше число: ${playerNumberChoose} \n(0 - четное, 1 - не четное) \n number: ${number}`);
        }
      }

      flag--;
    };

    while (playerBalls > 0 && botBalls > 0) {
      if (flag === 0) {
        if (playerBalls > botBalls) {
          number = botBalls;
        } else {
          number = playerBalls;
        }
        //    Компьютер выбирает число
        botNumber = getRandomIntInclusive(0, 1);
        //    Игрок выбирает число
        playerNumber = getPlayerNumber(number);
        playerChosen();
      } else if (flag === 1) {
        if (playerBalls > botBalls) {
          number = botBalls;
        } else {
          number = playerBalls;
        }
        let botNumberRandom;
        let playerNumberChoose = getPlayerNumberChoose();
        console.log('playerNumberChoose: ', playerNumberChoose);
        if (playerNumberChoose === null) {
          alert(`Отмена игры \nКомпьютер: ${botBalls}\nИгрок: ${playerBalls}`);
          (playerBalls = 0), (botBalls = 0);
          endGame = 0;
          return false;
        }
        botNumberRandom = getRandomIntInclusive(1, number);
        console.log('botNumberRandom: ', botNumberRandom);

        botChosen(playerNumberChoose, botNumberRandom);
      }

      //   alert(`компьютер: ${botBalls}\nИгрок: ${playerBalls}`);
    }

    alert(`Игра окончена компьютер: ${botBalls}\nИгрок: ${playerBalls}`);

    let answer = confirm('Играем еще?');
    if (answer) {
      playerBalls = 5;
      botBalls = 5;
      return game();
    } else {
      return;
    }
    game;
  };

  window.MARBLE = game;
})();
