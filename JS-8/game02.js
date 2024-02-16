'use strict';

{
  const game = () => {
    let numberOne = prompt('Первое число'),
      numberTwo = prompt('Второе число');

    if (numberOne === null || numberTwo === null) {
      return;
    }

    while (numberOne === numberTwo) {
      alert('Введите разные числа');
      numberOne = prompt('Первое число');
      numberTwo = prompt('Второе число');
    }

    let start = 0,
      end = 0;

    if (+numberOne < +numberTwo) {
      start = numberOne;
      end = numberTwo;
    } else if (+numberOne > +numberTwo) {
      start = numberTwo;
      end = numberOne;
    }

    let min = Math.ceil(start),
      max = Math.floor(end);

    const botNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(botNumber);

    let attempts = 0;

    attempts = Math.round((end - start) * 0.3);

    if (attempts < 0) {
      attempts = 1;
    }

    const failedNumbers = [];

    while (attempts > 0) {
      let playerNumber = prompt('Угадай число');

      attempts--;

      if (playerNumber > botNumber) {
        if (failedNumbers.includes(playerNumber)) {
          alert('Уже было! Попытка не учитывается');
          attempts++;
        } else if (attempts >= 1) {
          alert('Меньше!');
          failedNumbers.push(playerNumber);
        } else {
          alert('Попытки закончились, вы проиграли');
        }
      } else if (playerNumber === null) {
        break;
      } else if (playerNumber < botNumber) {
        if (failedNumbers.includes(playerNumber)) {
          alert('Уже было! Попытка не учитывается');
          attempts++;
        } else if (attempts >= 1) {
          alert('Больше');
          failedNumbers.push(playerNumber);
        } else {
          alert('Попытки закончились, вы проиграли');
        }
      } else {
        alert('Правильно!');
        break;
      }
    }
  };

  game();
}
