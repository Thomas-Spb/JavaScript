'use strict';

{
  function arrayGenerator(count) {
    const array = [];
    for (let i = 0; i < count; i++) {
      array.push(Math.ceil(Math.random() * 100));
    }
    return array;
  }

  console.log('Просто массив', arrayGenerator(50));
}
