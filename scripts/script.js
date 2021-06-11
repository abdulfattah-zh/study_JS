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
  appData.addExpenses[i] = appData.addExpenses[i].trim();
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
//==========================================8lesson==========================
//a Кнопку "Рассчитать" через id
const startButton = document.getElementById('start');
console.log(startButton);

//b Кнопки “+” (плюс) через Tag, каждую в своей переменной. 
const btn_plus_income_add = document.getElementsByTagName('button')[0];
console.log(btn_plus_income_add);
const btn_plus_expenses_add = document.getElementsByTagName('button')[1];
console.log(btn_plus_income_add);

//c Чекбокс по id через querySelector
const deposit_check = document.querySelector('#deposit-check');
console.log(deposit_check);

//d Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
const additional_income_item = document.querySelectorAll('.additional_income-item');
//вывыести все данные 
// for (let elem of additional_income_item) {
//   console.log(elem.innerHTML); 
// }

// e Каждый элемент в правой части программы через класс(не через querySelector),
// которые имеют в имени класса "-value", начиная с class="budget_day-value" 
// и заканчивая class="target_month-value">
const result_budget_month = document.querySelector('.budget_month-value'); // Доход за месяц
console.log(result_budget_month);
const result_budget_day = document.querySelector('.budget_day-value'); // Дневной бюджет
console.log(result_budget_day);
const result_expenses_month = document.querySelector('.expenses_month-value'); // Расход за месяц
console.log(result_expenses_month);
const result_additional_income = document.querySelector('.additional_income-value'); // Возможные доходы
console.log(result_additional_income);
const result_additional_expenses = document.querySelector('.additional_expenses-value'); // Возможные расходы
console.log(result_additional_expenses);
const result_income_period = document.querySelector('.income_period-value'); // Накопления за период
console.log(result_income_period);
const result_target_month = document.querySelector('.target_month-value'); // Срок достижения цели в месяцах
console.log(result_target_month);
// f Оставшиеся поля через querySelector каждый в отдельную переменную:
// поля ввода (input) с левой стороны и не забудьте про range.

const salary_amount_input = document.querySelector(".salary-amount"); // Месячный доход*
console.log(salary_amount_input);
const income_title_input = document.querySelector(".income-title"); // Дополнительный доход
const income_amount_input = document.querySelector(".income-amount");
console.log(income_title_input);
console.log(income_amount_input);

const expenses_title_input = document.querySelector(".expenses-title"); // Обязательные расходы
const expenses_amount_input = document.querySelector(".expenses-amount");
console.log(expenses_title_input);
console.log(expenses_amount_input);


const additional_expenses_item_input = document.querySelector(".additional_expenses-item"); // Возможные расходы 
console.log(additional_expenses_item_input);

const period_select_input = document.querySelector(".period-select");
console.log(period_select_input);

