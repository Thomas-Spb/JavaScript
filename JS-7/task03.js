'use strict';

{
  const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

  function addPrefix(names, pref) {
    const prefArray = [];
    let name = '';
    for (name of names) {
      prefArray.push(`${pref} ${name}`);
      //   console.log(name);
    }
    return prefArray;
  }

  //   addPrefix(names, 'Mr');
  console.log(addPrefix(names, 'MrT'));
}
