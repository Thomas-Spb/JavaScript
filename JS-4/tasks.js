const rain = Math.round(Math.random());
// console.log(rain);

rain ? console.log('Пошёл дождь. Возьмите зонт!') : console.log('Дождя нет!');

let mathBall = Number(prompt('Введите кол-во баллов по математике:'));
let langBall = Number(prompt('Введите кол-во баллов по русскому языку:'));
let infBall = Number(prompt('Введите кол-во баллов по информатике: '));

totalBalls = mathBall + langBall + infBall;

console.log('totalBalls: ', totalBalls);

if (totalBalls < 265) {
  console.log('Печально, вы не поступили!');
} else {
  console.log('Поздравляю, вы поступили на бюджет!');
}

let money = Number(prompt('Введите сколько бабосиков снимаете: '));
let temp = money % 100;
console.log(temp);
if (temp == 0) {
  console.log('Возьмите деньги');
} else {
  console.log('Кол-во не кратно 100');
}

const income = Number(prompt('Укажите ваш доход: ', 0));

if (isNaN(income)) {
  alert('Вы ввели некорректные данные. Пожалуйста, указывайте числа.');
} else if (income < 15000) {
  console.log('Налог для вас составляет: ' + income * 0.13);
} else if (income >= 15000 && income < 50000) {
  console.log('Налог для вас составляет: ' + income * 0.2);
} else if (income >= 50000) {
  console.log('Налог для вас составляет: ' + income * 0.3);
}

const income2 = Number(prompt('Укажите ваш доход: ', 0));

if (isNaN(income2)) {
  alert('Вы ввели некорректные данные. Пожалуйста, указывайте числа.');
} else if (income2 < 15000) {
  console.log('Налог для вас составляет: ' + income2 * 0.13);
} else if (income2 >= 15000 && income2 < 50000) {
  let tax = (income2 - 15000) * 0.2 + 15000 * 0.13;
  console.log('Налог для вас составляет: ' + tax);
} else if (income2 >= 50000) {
  let tax = (income2 - 50000) * 0.3 + 50000 * 0.2;
  console.log('Налог для вас составляет: ' + tax);
}
