'use strict';

{
  console.log('========================================');
  console.log('');
  const basketSum = 33000;
  const basketGoods = 12;
  const promo = 'METHED';
  const promo2 = 'G3H2Z1';

  function calculate(basketSum, basketGoods, promo) {
    console.log('========================================');
    console.log('');
    let sum = basketSum;
    if (basketGoods > 10) {
      sum -= basketSum * 0.03;
      console.log('3%:', sum);
    }

    if (basketSum > 30000) {
      sum -= (basketSum - 3000) * 0.15;
      console.log('большк 30к', sum);
    }

    if (promo === 'METHED') {
      sum -= sum * 0.1;
      console.log('скидка METHED', sum);
    }

    if (promo === 'G3H2Z1' && sum > 2000) {
      sum -= 500;
      console.log('скидка G3H2Z1', sum);
    }

    // console.log(basketSum, basketGoods, promo);
    console.log(sum);
  }

  calculate(basketSum, basketGoods, promo);
  calculate(basketSum, basketGoods, promo2);
}
