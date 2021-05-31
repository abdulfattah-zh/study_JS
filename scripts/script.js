let money = 100,
    income = 30,
    addExpenses = 'Taxi, Caffee, Burger, Internet',
    deposit = false,
    mission = 999,
    period = 3,
    budgetDay = 11.1;

console.log(` Money:   type :  ${typeof (money)}   |  value :   ${money}`);
console.log(` Income:   type :  ${typeof (income)}   |  value :   ${income}`);
console.log(` Deposit:   type :  ${typeof (deposit)}   |  value :  ${deposit}`);

console.log("Length: " + addExpenses.length + " symbols ");

console.log(` Период равен : ${period} месяцев и Цель заработать ${mission} $`);

console.log((addExpenses.toLocaleLowerCase()).split(', '));
console.log('BudgetDay:' + budgetDay);