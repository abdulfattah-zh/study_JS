"use strict"
let deposit = false,
    deposit1 = false,
    mission = 75000,
    mission1 = 75000,
    period = 0,
    amoutCount = 0;



let money = parseInt(prompt('Ваш месячный доход?'));
// //let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');

// //let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = parseInt(prompt('Во сколько это обойдется?'));
// console.log(amount1);

// //let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = parseInt(prompt('Во сколько это обойдется?'));
// console.log(amount2);

//==========================================4lesson==========================

// // 1) Объявить функцию getExpensesMonth.Функция возвращает сумму всех обязательных расходов за месяц
const getExpensesMonth = function (amount1, amount2) {
    return amount1 + amount2;
};
// console.log(getExpensesMonth(amount1, amount2));
// // end 1)

//---------------------------------------------------

// 2) Объявить функцию getAccumulatedMonth.Функция возвращает Накопления за месяц(Доходы минус расходы)
const getAccumulatedMonth = function () {
    let buffer = getExpensesMonth(amount1, amount2);
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
    return Math.ceil(period = mission / getAccumulatedMonth()); // mission complete
};
console.log("Время достижения цели : " + getTargetMonth());


//5) Удалить из кода переменную budgetMonth 
// этой переменной нет

// 6) budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
let budgetDay = getAccumulatedMonth() / 30;



//==========================================4lesson==========================






Math.floor(budgetDay);

console.log("Чистая прибыль в день с учетом всех расходов : " + budgetDay); // dnevnoi dohod




if (budgetDay < 0)
    console.log("Что то пошло не так");
else if (budgetDay >= 1200)
    console.log("У вас высокий уровень дохода");
else if (budgetDay >= 600 || budgetDay <= 1199)
    console.log("У вас средний уровень дохода");
else
    console.log("К сожалению у вас уровень дохода ниже среднего");

deposit = confirm('Есть ли у вас депозит в банке?');