'use strict';

{
  function arrayGenerator(count, n, m, option) {
    const array = [],
      min = n,
      max = m;
    let newArray = [];

    for (let i = 0; i < count; i++) {
      array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    if (option === 'even') {
      newArray = array.filter(item => !(item % 2));
    } else if (option === 'odd') {
      newArray = array.filter(item => !!(item % 2));
    }

    newArray.sort(function (a, b) {
      return a - b;
    });

    return newArray;
  }

  console.log('Массив с четными', arrayGenerator(20, -30, 80, 'even'));
  console.log('Массив с не четными', arrayGenerator(20, -30, 90, 'odd'));
}
