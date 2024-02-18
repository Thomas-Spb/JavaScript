'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() {
    return this.totalPrice;
  },

  add(itemName, itemPrice, itemCount = 1) {
    this.items.push({ itemName, itemPrice, itemCount });
    this.increaseCount(itemCount);
    this.calculateItemPrice();
    console.log(this.items);
  },

  increaseCount(number) {
    this.count += number;
  },

  calculateItemPrice() {
    this.items.forEach(item => {
      this.totalPrice += item.itemPrice * item.itemCount;
    });
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

// getTotalPrice()

// метод возвращает значение свойства totalPrice

// calculateItemPrice()

// пересчитывает стоимость всей корзины и записывает значение в totalPrice

// Увеличивает свойство count на это число

// add()

// Принимает три параметра:

// название товара
// цену товара
// количество товара (опциональный параметр, по умолчанию 1 товар)
// этот метод формирует объект из полученных параметров и добавляет его в свойство items

// так же вызывает все необходимые методы чтобы свойства count и totalPrice были актуальные

// print()

// Выводит в консоль JSON строку из массива items и на следующей строке выводит общую стоимость корзины
// console.log(cart);
cart.add('Test', 10, 22);
cart.add('Лимонад', 5, 35);
cart.add('Молок', 2, 14);
cart.print();
