'use strict';

{
  const revertString = function (string) {
    let str = string;
    console.log([...str].reverse().join(''));
  };

  revertString('прИвЕт Мир');
}
