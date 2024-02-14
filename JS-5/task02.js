'use strict';

{
  const stringMod = function (string) {
    let str = string;
    console.log(str[0].toUpperCase() + str.slice(1).toLowerCase());
  };

  stringMod('прИвЕт Мир');
}
