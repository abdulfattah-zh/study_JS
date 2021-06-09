"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n) && isFinite(n));
};

let money;
let start = function () {
  while (!isNumber(money)) {
    money = +prompt("Ваш месячный доход?", 20000);
    return money;
  }
};

let appData = {
  budget: start(),
  budgetDay: 0,
  budgetMonth: 0,
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 50000,
  period: 3,
  asking: function () {
    let addExpenses = prompt(
      "Перечислите возможные расходы за рассчитываемый период через запятую?", "Ьензин, Садик, Вафли"
    );
    appData.addExpenses = addExpenses.toLowerCase().split(",");
    appData.deposit = confirm("Есть ли у вас депозит в банке?");

    //from GEM to asking
    //let sum = 0;

    for (let i = 0; i < 2; i++) {
      appData.expenses[prompt("Введите обязательную статью расходов?", `sadik${i+1}`)] = +prompt("Во сколько это обойдется?", +(i + 1) * 1000);
    }
    console.log(appData.expenses);
    //return sum;
    //GEM 

  },
  getExpensesMonth: function () {
    let sum = 0;
    for (let key in appData.expenses) {
      sum += appData.expenses[key];
    }
    console.log(sum);
    return sum;
  },
  getBudget: function () {
    // let buffer = appData.getExpensesMonth();
    let amoutCount = appData.getExpensesMonth();
    appData.budgetMonth = money - amoutCount;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    return appData.budgetDay;
    // return money- buffer;
  },
  getTargetMonth: function () {
    // let buffer = appData.getExpensesMonth();
    let target = Math.ceil((appData.period = appData.mission / appData.budgetMonth));
    console.log(target);
    if (target <= 0) {
      return "Цель не будет достигнута ";
    } else {
      return "Цель будет достигнута ";
    }
    // mission complete
  },

  //
  getStatusIncome: function () {
    if (appData.budgetDay < 0) return "Что то пошло не так";
    else if (appData.budgetDay >= 1200) return "У вас высокий уровень дохода";
    else if (appData.budgetDay >= 600 || appData.budgetDay <= 1199)
      return "У вас средний уровень дохода";
    else return "К сожалению у вас уровень дохода ниже среднего";
  }
  //
};
start();

appData.asking();
console.log("Расходы за месяц : " + appData.getExpensesMonth());
console.log(
  "Время достижения цели : " + appData.period + " месяца"
);

console.log("Чистая прибыль в день с учетом всех расходов : " + appData.budgetDay); // dnevnoi dohod

console.log(appData.getStatusIncome(appData.deposit)); //
console.log("            ");
console.log("            ");
console.log("            ");
console.log("-----------------Наша программа включает в себя----------------------");
for (let key in appData) {
  console.log("            ");
  console.log("Ключ:  " + key + "   Значение: " + appData[key]);
  console.log("            ");
}
//==========================================7lesson==========================
