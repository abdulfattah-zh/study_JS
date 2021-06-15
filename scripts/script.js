"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n) && isFinite(n));
};
const isString = function (n) {
  return isNaN(n) && typeof n === 'string';
};


let start = document.getElementById('start'),
  btnPlus = document.getElementsByTagName('button'),
  incomesPlus = btnPlus[0],
  expensesPlus = btnPlus[1],
  depositCheck = document.querySelector('#deposit-check'), // Чекбокс
  additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
  budgetMonthValue = document.getElementsByClassName('budget_month-value')[0], // Доход за месяц
  budgetDayValue = document.getElementsByClassName('budget_day-value')[0], // Дневной бюджет
  expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0], // Расход за месяц
  additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0], // Возможные доходы
  additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0], // Возможные расходы
  incomePeriodValue = document.getElementsByClassName('income_period-value')[0], // Накопления за период
  targetMonthValue = document.getElementsByClassName('target_month-value')[0], // Срок достижения цели в месяцах
  salaryAmountInput = document.querySelector(".salary-amount"), // Месячный доход*
  incomeTitleInput = document.querySelector(".income-title"), // Дополнительный доход

  incomesItems = document.querySelectorAll(".income-items"),
  expensesTitleInput = document.querySelector(".expenses-title"), // Обязательные расходы
  expensesItems = document.querySelectorAll(".expenses-items"),
  additionalExpensesInput = document.querySelector(".additional_expenses"), // Возможные расходы 
  periodSelectRage = document.querySelector(".period-select"),
  titlePeriodAmount = document.querySelector(".period-amount"),
  additionalExpensesItem = document.querySelector(".additional_expenses-item"),
  targetAmount = document.querySelector(".target-amount");
  



let appData = {
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  incomeMonth: 0,
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  depositIncome: 0,
  period: 3,
  start: function () {
    // do{
    //   money = +prompt("Ваш месячный доход?", 20000);
    // }
    // while (!isNumber(money))
    if(salaryAmountInput.value === ""){
      alert("Ошибка, поле Месячный доход не должно быть пустым!");
      return;
    }
    appData.budget = +salaryAmountInput.value;
    console.log('salaryAmount.value', salaryAmountInput.value);

    appData.getButtonStatus();
    appData.getExpenses();
    appData.getIncomes();
    appData.getBudget();
    appData.getAddExpenses();
    appData.getAddIncome();
    
    appData.getPeriod();
    appData.showResults();


    // appData.asking();
    // appData.getInfoDeposit();
  },
  getPeriod: function(){
    titlePeriodAmount.textContent = periodSelectRage.value;
    incomePeriodValue.value = appData.budgetMonth *  periodSelectRage.value;
  },
  getButtonStatus: function(){
    if(salaryAmountInput.value !== ''){
      start.style.backgroundColor = "green";
      console.log("sssssssssssss");
    }
    else{
      start.style.backgroundColor = "gray";
    }
  },

  addIncomesBlock : function(){
    let cloneIncomesItem = incomesItems[0].cloneNode(true);
    incomesItems[0].parentNode.insertBefore(cloneIncomesItem, incomesPlus);
    incomesItems = document.querySelectorAll(".income-items");
    if(incomesItems.length === 3) {
      incomesPlus.style.display = "none";
    }
  },
  getIncomes: function() {
    incomesItems.forEach(function(item){
      console.log(item);
      let itemIncomes = item.querySelector(".income-title").value;
      let cashIncomes = item.querySelector(".income-amount").value;
      if(itemIncomes !== '' && cashIncomes !== ''){
        appData.income[itemIncomes] = cashIncomes;
      }
    });
  },
  addExpensesBlock : function() {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll(".expenses-items");
    if(expensesItems.length === 3) {
      expensesPlus.style.display = "none";
    }
  },
  getExpenses: function() {
    expensesItems.forEach(function(item){
      console.log(item);
      let itemExpenses = item.querySelector(".expenses-title").value;
      let cashExpenses = item.querySelector(".expenses-amount").value;
      if(itemExpenses !== '' && cashExpenses !== ''){
        appData.expenses[itemExpenses] = cashExpenses;
      }
    });
  },
  
  showResults : function () {
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(", ");
    additionalIncomeValue.value = appData.addIncome.join(", ");
    targetMonthValue.value = appData.getTargetMonth();
  },
  getAddExpenses : function() {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
      item = item.trim();
      if(item !== ''){
        appData.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function(){
    additionalIncomeItem.forEach(function(item){
      let itemValue = item.value.trim();
      if(itemValue !== ''){
        appData.addIncome.push(itemValue);
      }
    });
  },
  asking: function () {
    let addExpenses = prompt(
      "Перечислите возможные расходы за рассчитываемый период через запятую?",
      "Ьензин,sадик,vафли"
    );
    appData.addExpenses = addExpenses.toLowerCase().split(",");
    appData.deposit = confirm("Есть ли у вас депозит в банке?");

    console.log(appData.expenses);
  },
  getExpensesMonth: function () {
    let sum = 0;
    for (let key in appData.expenses) {
      sum += +appData.expenses[key];
    }
    console.log(sum);
    return sum;
  },
  getIncomesMonth: function () {
    let sum = 0;
    for (let key in appData.income) {
      console.log(appData.income[key]);
      sum += +appData.income[key];
      console.log("LOLYOU: -----0 + " + sum);
    }
    console.log("XDS:   " +  typeof sum);

    return sum;
  },
  getBudget: function () {
    console.log(appData.expensesMonth = appData.getExpensesMonth());
    console.log(appData.incomeMonth = appData.getIncomesMonth());
    console.log(appData.budgetMonth = appData.budget + appData.incomeMonth);
    console.log(appData.budgetMonth = appData.budgetMonth - appData.expensesMonth);
    console.log(appData.budgetDay = Math.floor(appData.budgetMonth / 30));
    return appData.budgetDay;
 
    // return money- buffer;
  },
  getTargetMonth: function () {
   return Math.ceil(targetAmount.value / appData.budgetMonth);
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
      for (let i = 1; i > 0; i++) {
        appData.percentDeposit = +prompt("Какой годовой процент?", 10);
        if (isNumber(this.percentDeposit)) {
          appData.moneyDeposit = +prompt("Какая сумма заложена?", 10000);
          if (isNumber(this.moneyDeposit)) {
            appData.depositIncome = (this.moneyDeposit / 100) * this.percentDeposit;
            break;
          } else {
            alert("Вы ввели неверные данные, повторите попытку");
          }
        } else {
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


salaryAmountInput.addEventListener('change', appData.getButtonStatus);
start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomesPlus.addEventListener('click', appData.addIncomesBlock);
periodSelectRage.addEventListener('change', appData.getPeriod);




console.log(periodSelectRage.value);

// console.log("Время достижения цели : " + appData.period + " месяца");

// console.log(
//   "Чистая прибыль в день с учетом всех расходов : " + appData.getBudget()
// ); // dnevnoi dohod

// let rowEx = '';
// for (let i = 0; i < appData.addExpenses.length; i++) {
//   appData.addExpenses[i] = appData.addExpenses[i].trim();
//   rowEx = rowEx + " " + appData.addExpenses[i].charAt(0).toUpperCase() +
//     appData.addExpenses[i].substr(1, appData.addExpenses[i].length);
// }
// console.log(rowEx);
// // 


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




// console.log(
//   appData.percentDeposit,
//   appData.moneyDeposit,
//   appData.calcSavedMoney()
// );