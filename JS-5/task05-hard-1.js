'use strict';

{
  const NOD = function (a, b) {
    if (!b) {
      return a;
    } else {
      return NOD(b, a % b);
    }
  };
  console.log('noD', NOD(15, 200));
}
