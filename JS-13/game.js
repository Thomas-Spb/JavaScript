'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const MESSAGE_RUS = {
    tie: 'Ничья!',
    win: 'Вы выиграли!',
    lose: 'Вы проиграли!',
    exit: 'Действительно ли вы хотите выйти?',
    move: 'Введите ваш ход (камень, ножницы, бумага)',
    invalid: 'Неверный ход, пожалуйста, попробуйте еще раз.',
  };
  const MESSAGE_ENG = {
    tie: 'Tie!',
    win: 'You win!',
    lose: 'You lose!',
    exit: 'Do you really want to exit?',
    result: 'Player: %s Computer: %s',
    move: 'Enter your move (rock, paper, scissors)',
  };

  const getRandomIntInclusive = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getFigure = lang => {
    const botFigureNumber = getRandomIntInclusive(1, 3) - 1;
    // console.log('botFigureNumber: ', botFigureNumber);

    let botFigure;
    return (botFigure = FIGURES_RUS[botFigureNumber]);
  };

  const game = (language = 'RUS') => {
    // console.log('language: ', language);

    let figures = FIGURES_RUS;
    let messages = MESSAGE_RUS;

    let result = {
      player: 0,
      computer: 0,
      message: '',
    };
    const start = () => {
      let computerMove = getFigure('RUS');

      let playerMove = prompt(messages.move);
      console.log('playerMove: ', playerMove);

      if (playerMove === null) {
        const gameCancel = confirm(messages.exit);
        if (gameCancel) {
          alert(`
            Очки компьютера: ${result.computer}
            Очки игрока: ${result.player}`);
          return;
        } else {
          start();
        }
      } else if (playerMove[0] === 'к') {
        playerMove = 'камень';
      } else if (playerMove[0] === 'б') {
        playerMove = 'бумага';
      } else if (playerMove[0] === 'н') {
        playerMove = 'ножницы';
      } else if (figures.indexOf(playerMove) === -1) {
        alert(messages.invalid);
        return start();
      }

      console.log('herer');
      console.log('playerMove: ', playerMove);
      console.log('computerMove: ', computerMove);
      if (computerMove === playerMove) {
        result.message = MESSAGE_RUS.tie;
      } else if (
        (computerMove === 'камень' && playerMove === 'бумага') ||
        (computerMove === 'ножницы' && playerMove === 'камень') ||
        (computerMove === 'бумага' && playerMove === 'ножницы')
      ) {
        result.message = MESSAGE_RUS.win;
        result.player++;
      } else {
        result.message = MESSAGE_RUS.lose;
        result.computer++;
      }

      alert(`Выбор компьютера: ${computerMove}
        Выбор игрока: ${playerMove}
        Результат: ${result.message}`);

      const playMore = confirm('Играем еще?');

      if (playMore) {
        start();
      } else {
        alert(`
          Очки компьютера: ${result.computer}
          Очки игрока: ${result.player}`);
        return;
      }
    };

    return start;
  };

  //   const gameResult = () => {};к

  window.RPS = game;
})();
