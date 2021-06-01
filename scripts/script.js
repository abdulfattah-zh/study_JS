let money = 1,
    money1 = 1,
    getOut = 30,
    getOut1 = 30,
    addExpenses = 'Taxi, Caffee, Burger, Internet',
    addExpenses1 = 'Taxi, Caffee, Burger, Internet',
    deposit = false,
    deposit1 = false,
    mission = 75000,
    mission1 = 75000,
    period = 0,
    period1 = 0,
    budgetDay = 1,
    budgetDay1 = 1;

console.log(` Money:   type :  ${typeof (money)}   |  value :   ${money}`);
console.log(` Income:   type :  ${typeof (getOut)}   |  value :   ${getOut}`);
console.log(` Deposit:   type :  ${typeof (deposit)}   |  value :  ${deposit}`);

console.log("Length: " + addExpenses.length + " symbols ");

console.log(` Период равен : ${period} месяцев и Цель заработать ${mission} $`);

console.log((addExpenses.toLocaleLowerCase()).split(', '));
console.log('BudgetDay:' + budgetDay);

money = parseInt(prompt('Ваш месячный доход?'));


addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');
getOut = prompt('Укажите месячный расход: ');
budgetDay = money - getOut;
Math.floor(budgetDay);
console.log("Чистая прибыль в день с учетом всех расходов : " + budgetDay); // dnevnoi dohod
console.log("Время достижения цели : " + (Math.ceil(period = mission / (budgetDay * 30)))); // mission complete


if (budgetDay < 0)
    console.log("Что то пошло не так");
else if (budgetDay >= 1200)
    console.log("У вас высокий уровень дохода");
else if (budgetDay >= 600 || budgetDay <= 1199)
    console.log("У вас средний уровень дохода");
else
    console.log("К сожалению у вас уровень дохода ниже среднего");

deposit = confirm('Есть ли у вас депозит в банке?');


money1 = parseInt(prompt('Ваш месячный доход?'));
addExpenses1 = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');
getOut1 = prompt('Укажите месячный расход: ');
budgetDay1 = money1 - getOut1;
Math.floor(budgetDay);
console.log("Чистая прибыль в день с учетом всех расходов : " + budgetDay1); // dnevnoi dohod
console.log("Время достижения цели : " + (Math.ceil(period1 = mission1 / (budgetDay1 * 30)))); // mission complete

if (budgetDay1 < 0)
    console.log("Что то пошло не так");
else if (budgetDay1 >= 1200)
    console.log("У вас высокий уровень дохода");
else if (budgetDay1 >= 600 || budgetDay <= 1199)
    console.log("У вас средний уровень дохода");
else
    console.log("К сожалению у вас уровень дохода ниже среднего");

deposit1 = confirm('Есть ли у вас депозит в банке?');