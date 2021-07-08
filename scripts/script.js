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
  depositBank = document.querySelector('.deposit-bank'), //
  depositAmount = document.querySelector('.deposit-amount'), //
  depositPercent = document.querySelector('.deposit-percent'), // 

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
let otherFlag = false;
let otherFlagAccept = false;
class AppData {
  constructor() {
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
  }

  start() {
    if (salaryAmountInput.value === "") {
      alert("Ошибка, поле Месячный доход не должно быть пустым!");
      return;
    } else {
      parseInt(salaryAmountInput.value)
      if (isNumber(salaryAmountInput.value)) {
        cancel.style.display = 'block'
        start.style.display = "none";
        inputS = document.querySelectorAll("input");
        inputS.forEach(item => item.disabled = true);
        incomesPlus = btnPlus[0];
        expensesPlus = btnPlus[1];
        incomesPlus.disabled = true;
        expensesPlus.disabled = true;
        depositBank.disabled = true;
        periodSelectRage.disabled = false;
        this.budget = +salaryAmountInput.value;
        this.getExpenses();
        this.getIncomes();
        this.getInfoDeposit();
        this.getButtonStatus();
        this.getBudget();
        this.getAddExpenses();
        this.getAddIncome();
        this.getPeriod();
        this.showResults();
      } else {
        alert("Введите число!");
      }
    }
  }
  cancel = function () {
    inputS.forEach(item => {
      item.value = ""
      item.disabled = false
    });
    incomesPlus = btnPlus[0];
    expensesPlus = btnPlus[1];
    incomesPlus.disabled = false;
    expensesPlus.disabled = false;

    // удаление созданных блоков с расходами
    let actualExpensesItemsArray = [...document.querySelectorAll('.expenses-items')] // преобразование коллекции в массив

    actualExpensesItemsArray.filter(item => item !== actualExpensesItemsArray[0]).forEach(item => {
      item.remove()
      expensesPlus.style.display = "block"
    });

    // удаление созданных блоков с доходами
    let actualIncomesItemsArray = [...document.querySelectorAll('.income-items')] // преобразование коллекции в массив

    actualIncomesItemsArray.filter(item => item !== actualIncomesItemsArray[0]).forEach(item => {
      item.remove()

      incomesPlus.style.display = "block"
    });
    cancel.style.display = 'none';
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
    this.period = 0;
    depositCheck.checked = false;
    depositBank.style.display = "none";
    depositAmount.style.display = "none";
    periodSelectRage.value = 0;
    titlePeriodAmount.textContent = "1";
    depositPercent.style.display = 'none';
    depositBank.disabled = false;


  }
  getPeriod() {
    titlePeriodAmount.textContent = periodSelectRage.value;
    incomePeriodValue.value = this.budgetMonth * periodSelectRage.value;
  }
  getButtonStatus() {
    if (salaryAmountInput.value !== '') {
      start.style.backgroundColor = "green";
    } else {
      start.style.backgroundColor = "gray";
    }
  }
  addIncomesBlock() {
    let cloneIncomesItem = incomesItems[0].cloneNode(true);
    incomesItems[0].parentNode.insertBefore(cloneIncomesItem, incomesPlus);
    incomesItems = document.querySelectorAll(".income-items");
    if (incomesItems.length === 3) {
      incomesPlus.style.display = "none";
    }
  }
  getIncomes() {
    incomesItems.forEach(item => {
      console.log(item);
      let itemIncomes = item.querySelector(".income-title").value;
      let cashIncomes = item.querySelector(".income-amount").value;
      if (itemIncomes !== '' && cashIncomes !== '') {
        this.income[itemIncomes] = cashIncomes;
      }
    });
  }
  addExpensesBlock() {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll(".expenses-items");
    if (expensesItems.length === 3) {
      expensesPlus.style.display = "none";
    }
  }
  getExpenses() {
    expensesItems.forEach(item => {
      console.log(item);
      let itemExpenses = item.querySelector(".expenses-title").value;
      let cashExpenses = item.querySelector(".expenses-amount").value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        this.expenses[itemExpenses] = cashExpenses;
      }
    });
  }
  showResults() {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(", ");
    additionalIncomeValue.value = this.addIncome.join(", ");
    targetMonthValue.value = this.getTargetMonth();
  }
  getAddExpenses() {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(item => {
      item = item.trim();
      if (item !== '') {
        this.addExpenses.push(item);
      }
    });
  }
  getAddIncome() {
    additionalIncomeItem.forEach(item => {
      let itemValue = item.value.trim();
      if (itemValue !== '') {
        this.addIncome.push(itemValue);
      }
    });
  }
  getExpensesMonth() {
    let sum = 0;
    for (let key in this.expenses) {
      sum += +this.expenses[key];
    }
    return sum;
  }
  getIncomesMonth() {
    let sum = 0;
    for (let key in this.income) {
      sum += +this.income[key];
    }

    return sum;
  }
  getBudget() {
    let monthDeposit = 0;
    this.percentDeposit = parseInt(depositPercent.value);
    console.log(depositAmount.value = parseInt(depositAmount.value));
    if (otherFlag) {
      console.log(monthDeposit = (this.moneyDeposit / 100) * +this.percentDeposit);
    } else {
      console.log(monthDeposit = this.moneyDeposit * (+this.percentDeposit / 100));
    }
    console.log(monthDeposit);
    this.expensesMonth = this.getExpensesMonth();
    this.incomeMonth = this.getIncomesMonth();
    this.budgetMonth = this.budget + this.incomeMonth + monthDeposit;
    this.budgetMonth = this.budgetMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
    return this.budgetDay;

  }
  getTargetMonth() {
    return Math.ceil(targetAmount.value / this.budgetMonth);
  }
  getStatusIncome() {
    if (this.budgetDay < 0) return "Что то пошло не так";
    else if (this.budgetDay >= 1200) return "У вас высокий уровень дохода";
    else if (this.budgetDay >= 600 || this.budgetDay <= 1199)
      return "У вас средний уровень дохода";
    else return "К сожалению у вас уровень дохода ниже среднего";
  }
  calcSavedMoney() {
    return this.budgetMonth * this.period;
  }
  getInfoDeposit(de_dust2) {
    if (de_dust2) {
      this.percentDeposit = parseInt(depositPercent.value);
      this.moneyDeposit = parseInt(depositAmount.value);
    } else {
      this.percentDeposit = depositBank.value;
      this.moneyDeposit = depositAmount.value;
    }
  }



  percentInfo() {
    if (!isNumber(depositPercent.value) || (depositPercent.value < 0) || (depositPercent.value > 100)) {
      alert('Введите корректное значение в поле проценты!');
      start.setAttribute('disabled', true);
    } else {
      start.removeAttribute('disabled');
    }
  }
  changePercent() {
    const selectValue = this.value;
    if (selectValue === 'other') {
      depositPercent.style.display = 'inline';
      otherFlag = true;
      depositAmount.addEventListener("change", appData.percentInfo);
      depositPercent.addEventListener("change", appData.percentInfo);
    } else {
      depositPercent.style.display = 'none';
      otherFlag = false;
    }
  }
  depositHandler() {
    if (depositCheck.checked) {
      console.log("check deposit box");


      depositBank.style.display = "inline-block";
      depositAmount.style.display = "inline-block";
      this.deposit = true; // add deposit in our class
      depositBank.addEventListener('change', this.changePercent);

    } else {
      console.log("unCheck deposit box");


      depositBank.style.display = "none";
      depositAmount.style.display = "none";
      depositBank.value = '';
      depositAmount.value = '';
      this.deposit = false;
      depositBank.removeEventListener('change', this.changePercent);
    }
  }
  eventListeners() {
    salaryAmountInput.addEventListener('change', appData.getButtonStatus.bind(appData));
    start.addEventListener('click', appData.start.bind(appData));
    cancel.addEventListener('click', appData.cancel.bind(appData));
    expensesPlus.addEventListener('click', appData.addExpensesBlock.bind(appData));
    incomesPlus.addEventListener('click', appData.addIncomesBlock.bind(appData));
    periodSelectRage.addEventListener('change', appData.getPeriod.bind(appData));
    depositCheck.addEventListener('change', this.depositHandler.bind(this));

  }
};

const appData = new AppData();
appData.eventListeners();
console.log(appData);