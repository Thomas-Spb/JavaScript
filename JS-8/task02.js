'use strict';

{
  function arrayGenerator(count, n, m) {
    const array = [],
      min = n,
      max = m;

    for (let i = 0; i < count; i++) {
      array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return array;
  }

  console.log('Массив с отрицательными числами', arrayGenerator(50, -10, -87));
}
