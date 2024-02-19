'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

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
    let sum = 0;
    this.items.forEach(item => {
      sum += item.itemPrice * item.itemCount;
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
