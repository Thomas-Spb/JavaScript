'use strict';

{
  const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

  const getAverageValue = arr => {
    let sum = 0;

    for (let num of arr) {
      sum += +num;
    }

    return Math.floor(sum / arr.length);
  };

  console.log(getAverageValue(allСashbox));
}
