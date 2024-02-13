const item = prompt('наименование товара');
const count = Number(prompt('Количество товара'));
const category = prompt('Категория товара');
const price = Number(prompt('Цена товара'));

if (isNaN(count)) {
  alert('Вы ввели неправильное кол-во');
}

if (isNaN(price)) {
  alert('Вы ввели некорректную цену');
}

item.trim();
category.trim();
console.log(`На складе ${count} единицы товара "${item}" на сумму ${count * price} деревянных`);
