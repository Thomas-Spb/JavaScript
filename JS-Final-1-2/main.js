'use strict';

(() => {
  let playerBalls = 5;
  let botBalls = 5;
  let flag = 0;

  //   ==========================
  //   let flag;

  //   const start = () => {
  //     const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  //     const MESSAGE_RUS = {
  //       tie: 'Ничья!',
  //       win: 'Вы выиграли!',
  //       lose: 'Вы проиграли!',
  //       exit: 'Действительно ли вы хотите выйти?',
  //       move: 'Введите ваш ход (камень, ножницы, бумага)',
  //       invalid: 'Неверный ход, пожалуйста, попробуйте еще раз.',
  //     };

  //     const getRandomIntInclusive = (min, max) => {
  //       return Math.floor(Math.random() * (max - min + 1)) + min;
  //     };

  //     const getFigure = () => {
  //       const botFigureNumber = getRandomIntInclusive(1, 3) - 1;
  //       // console.log('botFigureNumber: ', botFigureNumber);

  //       let botFigure;
  //       return (botFigure = FIGURES_RUS[botFigureNumber]);
  //     };
  //     let figures = FIGURES_RUS;
  //     let messages = MESSAGE_RUS;

  //     let result = {
  //       message: '',
  //     };

  //     let flag;
  //     let computerMove = getFigure();

  //     let playerMove = prompt(messages.move);

  //     if (playerMove === null) {
  //       const gameCancel = confirm(messages.exit);
  //       if (gameCancel) {
  //         alert(`
  //             Надо определить кто угадывает первый`);
  //         start();
  //       } else {
  //         start();
  //       }
  //     } else if (playerMove[0] === 'к') {
  //       playerMove = 'камень';
  //     } else if (playerMove[0] === 'б') {
  //       playerMove = 'бумага';
  //     } else if (playerMove[0] === 'н') {
  //       playerMove = 'ножницы';
  //     } else if (figures.indexOf(playerMove) === -1) {
  //       alert(messages.invalid);
  //       return start();
  //     }

  //     console.log('herer');
  //     console.log('playerMove: ', playerMove);
  //     console.log('computerMove: ', computerMove);
  //     if (computerMove === playerMove) {
  //       result.message = MESSAGE_RUS.tie;
  //       start();
  //     } else if (
  //       (computerMove === 'камень' && playerMove === 'бумага') ||
  //       (computerMove === 'ножницы' && playerMove === 'камень') ||
  //       (computerMove === 'бумага' && playerMove === 'ножницы')
  //     ) {
  //       alert(MESSAGE_RUS.win);
  //       flag = 0;
  //     } else {
  //       alert(MESSAGE_RUS.lose);
  //       flag = 1;
  //     }
  //     console.log('flag: ', flag);
  //   };
  //   console.log('flag: ', flag);
  //   ==========================

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const checkNumber = num => {
    return isNaN(num);
  };

  const getPlayerNumber = number => {
    let playerNumber = prompt(`Введите кол-во шаров от 1 до ${number}`);

    if (playerNumber === null) {
      alert(`Отмена игры \nКомпьютер: ${botBalls}\nИгрок: ${playerBalls}`);
      return;
    }

    if (checkNumber(playerNumber)) {
      alert('Введите число');
      return getPlayerNumber();
    }

    if (playerNumber > number || playerNumber < 1) {
      alert('Введите число с нужного диапозона');
      return getPlayerNumber();
    }

    return playerNumber;
  };

  const getPlayerNumberChoose = () => {
    let playerNumberChoose = +prompt('Введите 0 || 1 (четное || нечЕткое =))');
    console.log('Польователь угадывает: ', playerNumberChoose);

    if (playerNumberChoose === null) {
      alert(`Отмена игры \nКомпьютер: ${botBalls}\nИгрок: ${playerBalls}`);
      return;
    }

    if (checkNumber(playerNumberChoose)) {
      alert('Введите число');
      return getPlayerNumber();
    }

    if (playerNumberChoose < 0 || playerNumberChoose > 1) {
      alert('Введите число от 0 до 1');
      return getPlayerNumberChoose();
    }

    return playerNumberChoose;
  };

  let number = 0;

  const game = (playerBalls = 5, botBalls = 5) => {
    console.log('flag: ', flag);
    let botNumber = 0;
    let playerNumber = 0;
    // start();

    const playerChosen = () => {
      if (playerNumber % 2 === botNumber) {
        botBalls += playerNumber;
        playerBalls -= playerNumber;

        alert('Lozzzzeeee');
      } else {
        botBalls -= playerNumber;
        playerBalls += playerNumber;

        alert('Wwiinnn');
      }

      flag++;
    };

    const botChosen = (playerNumberChoose, botNumberRandom) => {
      if (botNumberRandom % 2 === playerNumberChoose) {
        botBalls -= botNumberRandom;
        playerBalls += botNumberRandom;

        alert('Wwiinnn');
      } else {
        botBalls += botNumberRandom;
        playerBalls -= botNumberRandom;

        alert('Lozzzzeeee');
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

        botNumber = getRandomIntInclusive(0, 1);
        console.log('botNumber: ', botNumber);
        playerNumber = getPlayerNumber(number);
        console.log('playerNumber: ', playerNumber);
        console.log('Компьютер выбрал: ', botNumber);
        playerNumber = +playerNumber;
        console.log('Игрок ввел: ', playerNumber);

        playerChosen();
      } else {
        let playerNumberChoose = getPlayerNumberChoose();
        let botNumberRandom = getRandomIntInclusive(0, number);

        botChosen(playerNumberChoose, botNumberRandom);
      }

      alert(`компьютер: ${botBalls}\nИгрок: ${playerBalls}`);
    }

    alert(`Игра окончена компьютер: ${botBalls}\nИгрок: ${playerBalls}`);

    let answer = confirm('Играем еще?');
    if (answer) {
      game();
    }
    return game;
  };

  window.MARBLE = game;
})();
