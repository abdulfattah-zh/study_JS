"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n) && isFinite(n));
};
const isString = function (n) {
  return isNaN(n) && typeof n === 'string';
};


let start = document.getElementById('start'),
  cancel = document.getElementById('cancel'),
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
  targetAmount = document.querySelector(".target-amount"),
  inputS = document.querySelectorAll("input");


// let flag = false;
// start.addEventListener('click', function () {
//   flag = true;
//   if (flag)
//     
// });


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
    if (salaryAmountInput.value === "") {
      alert("Ошибка, поле Месячный доход не должно быть пустым!");
      return;
    } else {
      parseInt(salaryAmountInput.value)
      if (isNumber(salaryAmountInput.value)) {
        console.log(cancel.style.display = 'block');
        start.style.display = "none";

        console.log(inputS);
        inputS.forEach(item => {
          console.log(item.setAttribute("readonly", "true"));
        });


        // for (let key in inputS) {
        //   console.log(inputS[key].setAttribute("readonly", "true"));
        // }

        this.budget = +salaryAmountInput.value;
        console.log('salaryAmount.value', salaryAmountInput.value);
        this.getButtonStatus();
        this.getExpenses();
        this.getIncomes();
        this.getBudget();
        this.getAddExpenses();
        this.getAddIncome();
        //
        this.getPeriod();
        this.showResults();
      } else {
        alert("Введите число!");
      }
    }
  },
  cancel: function () {

    inputS.forEach(item => {
      console.log(item.removeAttribute("readonly"));
    });
    inputS.forEach(item => {
      console.log(item.value = "");
    });
    console.log(cancel.style.display = 'none');
    start.style.display = "block";
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.incomeMonth = 0;
    this.income = {};
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.depositIncome = 0;
    this.period = 3;
  },

  getPeriod: function () {
    titlePeriodAmount.textContent = periodSelectRage.value;
    incomePeriodValue.value = this.budgetMonth * periodSelectRage.value;
  },
  getButtonStatus: function () {

    if (salaryAmountInput.value !== '') {
      start.style.backgroundColor = "green";
    } else {
      start.style.backgroundColor = "gray";
    }

  },

  addIncomesBlock: function () {
    let cloneIncomesItem = incomesItems[0].cloneNode(true);
    incomesItems[0].parentNode.insertBefore(cloneIncomesItem, incomesPlus);
    incomesItems = document.querySelectorAll(".income-items");
    if (incomesItems.length === 3) {
      incomesPlus.style.display = "none";
    }
  },
  getIncomes: function () {
    incomesItems.forEach(item => {
      console.log(item);
      let itemIncomes = item.querySelector(".income-title").value;
      let cashIncomes = item.querySelector(".income-amount").value;
      if (itemIncomes !== '' && cashIncomes !== '') {
        this.income[itemIncomes] = cashIncomes;
      }
    });
  },
  addExpensesBlock: function () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll(".expenses-items");
    if (expensesItems.length === 3) {
      expensesPlus.style.display = "none";
    }
  },
  getExpenses: function () {
    expensesItems.forEach(item => {
      console.log(item);
      let itemExpenses = item.querySelector(".expenses-title").value;
      let cashExpenses = item.querySelector(".expenses-amount").value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        this.expenses[itemExpenses] = cashExpenses;
      }
    });
  },

  showResults: function () {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(", ");
    additionalIncomeValue.value = this.addIncome.join(", ");
    targetMonthValue.value = this.getTargetMonth();
  },
  getAddExpenses: function () {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(item => {
      item = item.trim();
      if (item !== '') {
        this.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function () {
    additionalIncomeItem.forEach(item => {
      let itemValue = item.value.trim();
      if (itemValue !== '') {
        this.addIncome.push(itemValue);
      }
    });
  },
  asking: function () {
    let addExpenses = prompt(
      "Перечислите возможные расходы за рассчитываемый период через запятую?",
      "Ьензин,sадик,vафли"
    );
    this.addExpenses = addExpenses.toLowerCase().split(",");
    this.deposit = confirm("Есть ли у вас депозит в банке?");

    console.log(this.expenses);
  },
  getExpensesMonth: function () {
    let sum = 0;
    for (let key in this.expenses) {
      sum += +this.expenses[key];
    }
    console.log(sum);
    return sum;
  },
  getIncomesMonth: function () {
    let sum = 0;
    for (let key in this.income) {
      console.log(this.income[key]);
      sum += +this.income[key];
      console.log("LOLYOU: -----0 + " + sum);
    }
    console.log("XDS:   " + typeof sum);

    return sum;
  },
  getBudget: function () {
    console.log(this.expensesMonth = this.getExpensesMonth());
    console.log(this.incomeMonth = this.getIncomesMonth());
    console.log(this.budgetMonth = this.budget + this.incomeMonth);
    console.log(this.budgetMonth = this.budgetMonth - this.expensesMonth);
    console.log(this.budgetDay = Math.floor(this.budgetMonth / 30));
    return this.budgetDay;

  },
  getTargetMonth: function () {
    return Math.ceil(targetAmount.value / this.budgetMonth);
  },
  getStatusIncome: function () {
    if (this.budgetDay < 0) return "Что то пошло не так";
    else if (this.budgetDay >= 1200) return "У вас высокий уровень дохода";
    else if (this.budgetDay >= 600 || this.budgetDay <= 1199)
      return "У вас средний уровень дохода";
    else return "К сожалению у вас уровень дохода ниже среднего";
  },
  calcSavedMoney: function () {
    return this.budgetMonth * this.period;
  },
  returnAddExpenses: function () {},
};

salaryAmountInput.addEventListener('change', appData.getButtonStatus.bind(appData));
start.addEventListener('click', appData.start.bind(appData));
cancel.addEventListener('click', appData.cancel.bind(appData));
expensesPlus.addEventListener('click', appData.addExpensesBlock.bind(appData));
incomesPlus.addEventListener('click', appData.addIncomesBlock.bind(appData));
periodSelectRage.addEventListener('change', appData.getPeriod.bind(appData));






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