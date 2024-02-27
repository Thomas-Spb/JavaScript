(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const MESSAGE_RUS = {
    tie: 'Ничья!',
    win: 'Вы выиграли!',
    lose: 'Вы проиграли!',
    exit: 'Действительно ли вы хотите выйти?',
    move: 'Введите ваш ход (камень, ножницы, бумага)',
    invalid: 'Неверный ход, пожалуйста, попробуйте еще раз.',
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

  const game = () => {
    // console.log('language: ', language);

    let figures = FIGURES_RUS;
    let messages = MESSAGE_RUS;
    let flag;
    let result = {
      message: '',
    };
    const start = () => {
      let computerMove = getFigure();

      let playerMove = prompt(messages.move);
      console.log('playerMove: ', playerMove);

      if (playerMove === null) {
        const gameCancel = confirm(messages.exit);
        if (gameCancel) {
          alert(`
            Надо определить 1 ход`);
          start();
        } else {
          alert(`
            Всеравно!! Надо определить 1 ход`);
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
        alert(MESSAGE_RUS.tie);
        start();
      } else if (
        (computerMove === 'камень' && playerMove === 'бумага') ||
        (computerMove === 'ножницы' && playerMove === 'камень') ||
        (computerMove === 'бумага' && playerMove === 'ножницы')
      ) {
        alert(MESSAGE_RUS.win);
        return (flag = 0);
      } else {
        alert(MESSAGE_RUS.lose);
        return (flag = 1);
      }
    };

    return start();
  };

  //   const gameResult = () => {};к

  window.RPS = game;
})();
