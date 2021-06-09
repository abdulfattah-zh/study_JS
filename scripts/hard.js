"use strict";

let nowDay = 3;
let weekArray = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let weekAlert = '';
for (let i = 0; i < weekArray.length; i++) {

    if (i === nowDay) {
        weekAlert += "\nДень : " + weekArray[i].bold();
    } else if (i === 5 || i === 6) {
        weekAlert += "\nДень : " + weekArray[i].italics();
    } else {
        weekAlert += "\nДень : " + weekArray[i];
    }

}
alert(weekAlert);