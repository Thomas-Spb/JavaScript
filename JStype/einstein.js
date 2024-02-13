const myWeight = 99;
console.log('myWeight: ', myWeight);
const speedLight = 3e8;
console.log('speedLight: ', speedLight);

// console.log(Math.pow(speedLight, 2));

let energy = myWeight * Math.pow(speedLight, 2);
console.log('energy: ', energy);
