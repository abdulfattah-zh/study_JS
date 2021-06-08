"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n) && isFinite(n));
};

let deposit = false,
  deposit1 = false,
  mission = 75000,
  mission1 = 75000,
  period = 0,
  amoutCount = 0;

let money;
let addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую?"
);

let start = function () {
  money = +prompt("Ваш месячный доход?");
  //while (isNaN(money) || money.trim() === "" || money === null)
  while (!isNumber(money)) {
    money = +prompt("Ваш месячный доход?");
  }
};

start();

let expenses = [];
let getExpensesMonth = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt("Введите обязательную статью расходов?", "sadik1");
    sum += +prompt("Во сколько это обойдется?");
  }
  console.log(expenses);
  return sum;
};
let expensesAmount = getExpensesMonth();

const getAccumulatedMonth = function () {
  let buffer = expensesAmount;
  return money - buffer;
};
//console.log(getAccumulatedMonth());
//end 2)

//---------------------------------------------------

//3) Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth
let accumulatedMonth = getAccumulatedMonth();

//4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута
//цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат

const getTargetMonth = function () {
  let target = Math.ceil((period = mission / getAccumulatedMonth()));
  if (target <= 0) {
    return "Цель не будет достигнута";
  } else {
    return "Цель будет достигнута";
  }

  // mission complete
};
console.log("Время достижения цели : " + getTargetMonth());

// 6) budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
let budgetDay = getAccumulatedMonth() / 30;

Math.floor(budgetDay);

console.log("Чистая прибыль в день с учетом всех расходов : " + budgetDay); // dnevnoi dohod
const getStatusIncome = function (budgetDay) {
  if (budgetDay < 0) return "Что то пошло не так";
  else if (budgetDay >= 1200) return "У вас высокий уровень дохода";
  else if (budgetDay >= 600 || budgetDay <= 1199)
    return "У вас средний уровень дохода";
  else return "К сожалению у вас уровень дохода ниже среднего";
};

deposit = confirm("Есть ли у вас депозит в банке?");

// 7) Почистить консоль логи и добавить недостающие, должны остаться:
//     вызовы функции showTypeOf
//     Расходы за месяц вызов getExpensesMonth
//     Вывод возможных расходов в виде массива(addExpenses)
//     Cрок достижения цели в месяцах(результат вызова функции getTargetMonth)
//     Бюджет на день(budgetDay)
//     вызов функции getStatusIncome

console.clear();

//     вызовы функции showTypeOf -- не нашел описания функции - просто вызов всех функций??

console.log(expensesAmount);
console.log(addExpenses);
console.log(getTargetMonth());
console.log(budgetDay);
console.log(getStatusIncome(deposit)); //

//==========================================4lesson==========================
