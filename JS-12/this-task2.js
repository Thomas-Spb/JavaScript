'use strict';
const cart = {
  items: [],
  count: 0,
  discount: 0,

  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount += 15;
    } else if (promocode === 'NEWYEAR') {
      this.discount += 21;
    }
  },

  get totalPrice() {
    return this.calculateItemPrice();
  },
  add(itemName, itemPrice, itemCount = 1) {
    this.items.push({ itemName, itemPrice, itemCount });
    this.increaseCount(itemCount);
    // this.calculateItemPrice();
    console.log(this.items);
  },

  increaseCount(number) {
    this.count += number;
  },

  calculateItemPrice() {
    let sum = 0,
      sumNoDiscount = 0;
    this.items.forEach(item => {
      sumNoDiscount += item.itemPrice * item.itemCount;
      sum = sumNoDiscount - sumNoDiscount * (this.discount / 100);
    });

    return sum;
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  },
};

cart.add('Test', 10, 22);
cart.add('Лимонад', 15, 35);
cart.add('Молок', 2, 14);
cart.print();
