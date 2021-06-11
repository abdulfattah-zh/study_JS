"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n) && isFinite(n));
};
const isString = function(n) {
  return isNaN(n) && typeof n === 'string';
};

let money;
let start = function () {
  while (!isNumber(money)) {
    money = +prompt("Ваш месячный доход?", 20000);
    
  }
};

let appData = {
  budget: start(),
  budgetDay: 0,
  budgetMonth: 0,
  income: {},
  incomeKey : '',
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  depositIncome: 0,
  mission: 50000,
  period: 3,
  asking: function () {
    if (confirm("Есть ли у вас дополнительный источник заработка ?")) {

        for(let i = 1; i > 0; i++){

        let itemIncome = prompt(
          "Какой у вас есть дополнительный заработок ?",
          "Таксую"
        );
        this.incomeKey = itemIncome;
        console.log(typeof itemIncome);
        if(isString(itemIncome)){
          let cashIncome = +prompt(
          "Cколько в месяц вы на этом зарабатываете ?",
          10000
        );
          if(isNumber(cashIncome)){
            appData.income[itemIncome] = cashIncome;
            break;
          }
          else{
            alert("Вы ввели неверное значение");
          }
        }
        else{
          alert("Вы ввели неверное значение");
        }

      }
    }

    let addExpenses = prompt(
      "Перечислите возможные расходы за рассчитываемый период через запятую?",
      "Ьензин,sадик,vафли"
    );
    appData.addExpenses = addExpenses.toLowerCase().split(",");
    appData.deposit = confirm("Есть ли у вас депозит в банке?");

    //from GEM to asking
    //let sum = 0;
    let flag = 2;
    for (let i = 1; i > 0; i++) {
      // appData.expenses[
      //   prompt("Введите обязательную статью расходов?", `sadik${i + 1}`)
      // ] = +prompt("Во сколько это обойдется?", +(i + 1) * 1000);
      if(flag != 0){
        let rashodName = prompt("Введите обязательную статью расходов?", `sadik`);
        if(isString(rashodName)){
          appData.expenses[rashodName]
          let rashodPrice = +prompt("Во сколько это обойдется?", 1000);
          if(isNumber(rashodPrice)){
            appData.expenses[rashodName] = rashodPrice;
            flag--;
          }
          else{
            alert("Вы ввели неверное значение, Повторите попытку");
          }
        }
        else{
          alert("Вы ввели неверное значение, Повторите попытку");
        }
      }
      else{
        break;
      }
        
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
    money = money + appData.income[appData.incomeKey];
    appData.budgetMonth = money - amoutCount;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    return appData.budgetDay;
    // return money- buffer;
  },
  getTargetMonth: function () {
    // let buffer = appData.getExpensesMonth();
    let target = Math.ceil(
      (appData.period = appData.mission / appData.budgetMonth)
    );
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
  },
  getInfoDeposit: function () {
    if (appData.deposit) {
      for(let i = 1; i > 0; i++){
      appData.percentDeposit = +prompt("Какой годовой процент?", 10);
      if(isNumber(this.percentDeposit)){
        appData.moneyDeposit = +prompt("Какая сумма заложена?", 10000);
        if(isNumber(this.moneyDeposit)){
          appData.depositIncome = (this.moneyDeposit/100) * this.percentDeposit; 
          break;
        }
        else{
          alert("Вы ввели неверные данные, повторите попытку");
        }
      }
      else{
        alert("Вы ввели неверные данные, повторите попытку");
      }
      
      
    }
  }
  },
  calcSavedMoney: function () {
    return appData.budgetMonth * appData.period;
  },
  returnAddExpenses: function () {},
};
start();

appData.asking();

appData.getInfoDeposit();

console.log("Расходы за месяц : " + appData.getExpensesMonth());
console.log("Время достижения цели : " + appData.period + " месяца");

console.log(
  "Чистая прибыль в день с учетом всех расходов : " + appData.getBudget()
); // dnevnoi dohod

let rowEx = '';
for(let i = 0; i < appData.addExpenses.length; i++){
  appData.addExpenses[i] = appData.addExpenses[i].trim(); // trip used
    rowEx = rowEx + " " + appData.addExpenses[i].charAt(0).toUpperCase()
    + appData.addExpenses[i].substr(1, appData.addExpenses[i].length);
}
console.log(rowEx);
// 
//appData.addExpenses[i].charAt(0).toUpperCase() +

// console.log(appData.getStatusIncome(appData.deposit)); //
// console.log("            ");
// console.log("            ");
// console.log("            ");
// console.log(
//   "-----------------Наша программа включает в себя----------------------"
// );
// for (let key in appData) {
//   console.log("            ");
//   console.log("Ключ:  " + key + "   Значение: " + appData[key]);
//   console.log("            ");
// }
console.log(
  appData.percentDeposit,
  appData.moneyDeposit,
  appData.calcSavedMoney()
);
//==========================================7lesson==========================
