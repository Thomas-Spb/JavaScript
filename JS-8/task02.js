'use strict';

{
  function arrayGenerator(count, n, m) {
    const array = [],
      min = 0,
      max = 0;

    if (+n < +m) {
      min = n;
      max = m;
    } else if (+n > +m) {
      min = m;
      max = n;
    }

    for (let i = 0; i < count; i++) {
      array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return array;
  }

  console.log('Массив с отрицательными числами', arrayGenerator(50, -10, -87));
}
