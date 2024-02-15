'use strict';

{
  const allСashbox = [
    [12, 4500],
    [7, 3210],
    [4, 650],
    [3, 1250],
    [9, 7830],
    [1, 990],
    [6, 13900],
    [1, 370],
  ];

  function getAveragePriceGoods(arr) {
    let totalPrice = 0,
      averagePrice = 0,
      countGoods = 0;
    //   count = 0,
    //   price = 0;

    for (const [count, price] of arr) {
      countGoods += count;
      totalPrice += price;

      //   console.log(countGoods, totalPrice);
    }

    averagePrice = (totalPrice / countGoods).toFixed(2);
    return averagePrice;
  }

  console.log(getAveragePriceGoods(allСashbox));
}
