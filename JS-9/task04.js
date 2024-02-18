'use strict';

{
  function arrayGenerator(a, b) {
    let startYear = a,
      endYear = b,
      array = [];

    if (a > b) {
      startYear = b;
      endYear = a;
    } else {
      startYear = a;
      endYear = b;
    }

    for (let i = startYear; i < endYear; i++) {
      array.push(i);
    }

    array = array.filter(item => (!(item % 400) || !!(item % 100)) && !(item % 4));

    return array;
  }

  console.log(arrayGenerator(768, 2280));
}
