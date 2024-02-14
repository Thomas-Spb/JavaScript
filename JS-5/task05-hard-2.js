'use strict';

{
  const firstNumber = +prompt('Первое число');
  const secondNumber = +prompt('Второе число');

  const minOfNumbers = (firstNumber, secondNumber) => {
    const minNumber = (firstNumber + secondNumber - Math.abs(firstNumber - secondNumber)) / 2;
    return minNumber;
  };

  console.log(minOfNumbers(firstNumber, secondNumber));
}
