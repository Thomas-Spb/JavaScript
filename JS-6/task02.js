'use strict';

{
  const isPrime = num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      } else {
        return true;
      }
    }
  };
  console.log(isPrime(152));
}
