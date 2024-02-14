'use strict';

{
  const converter = function (money) {
    const fnMonet = money;
    const euro = 1.2;
    const baks = 73;
    let result = fnMonet * euro * baks;
    return result;
  };

  console.log(Math.round(converter(22), 2));
}
