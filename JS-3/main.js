// 'use sctrict';

// {
//   const carBrand = 'Vaz';
//   let carsQuantity = 5;
//   const category = 'Car';
//   let carPrice = 500;

//   console.log('carBrand: ', carBrand);
//   console.log('totalPrice:', carsQuantity * carPrice);
// }

// {
//   const item = 'smart проектор philips';
//   const count = 15;
//   const category = 'видео техника';
//   const price = 1200;

//   console.log(item);
//   console.log(`общая сумма товара: ${count * price}`);
// }
{
  const item = prompt('наименование товара');
  const count = +prompt('Количество товара');
  const category = prompt('Категория товара');
  const price = +prompt('Цена товара');
  console.log('item: ', typeof item);
  console.log('count: ', typeof count);
  console.log('category: ', typeof category);
  console.log('price: ', typeof price);

  console.log(`На складе ${count} единицы товара "${item}" на сумму ${count * price} деревянных`);
}
