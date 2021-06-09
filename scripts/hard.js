"use strict";

let nowDay = 'Среда';
let weekArray = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let weekAlert = '';
for (let i = 0; i < weekArray.length; i++) {

    if (weekArray[i] === nowDay) {
        weekAlert += "\nДень : " + weekArray[i].bold();
    } else if (weekArray[i] === 'Суббота' || weekArray[i] === 'Воскресенье') {
        weekAlert += "\nДень : " + weekArray[i].italics();
    } else {
        weekAlert += "\nДень : " + weekArray[i];
    }

}
alert(weekAlert);
