let deposit = false,
    deposit1 = false,
    mission = 75000,
    mission1 = 75000,
    period = 0,
    period1 = 0;

// console.log(` Money:   type :  ${typeof (money)}   |  value :   ${money}`);
// console.log(` Income:   type :  ${typeof (getOut)}   |  value :   ${getOut}`);
// console.log(` Deposit:   type :  ${typeof (deposit)}   |  value :  ${deposit}`);

// console.log("Length: " + addExpenses.length + " symbols ");

// console.log(` Период равен : ${period} месяцев и Цель заработать ${mission} $`);

// console.log((addExpenses.toLocaleLowerCase()).split(', '));
// console.log('BudgetDay:' + budgetDay);


let money = parseInt(prompt('Ваш месячный доход?'));
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = prompt('Во сколько это обойдется?');

let budgetDay = (money - (amount1 + amount2)) / 30;
Math.floor(budgetDay);
console.log("Чистая прибыль в день с учетом всех расходов : " + budgetDay); // dnevnoi dohod
console.log("Время достижения цели : " + (Math.ceil(period = mission / budgetDay))); // mission complete


if (budgetDay < 0)
    console.log("Что то пошло не так");
else if (budgetDay >= 1200)
    console.log("У вас высокий уровень дохода");
else if (budgetDay >= 600 || budgetDay <= 1199)
    console.log("У вас средний уровень дохода");
else
    console.log("К сожалению у вас уровень дохода ниже среднего");

deposit = confirm('Есть ли у вас депозит в банке?');