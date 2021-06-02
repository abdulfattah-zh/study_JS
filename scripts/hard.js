// Переменная lang может принимать 2 значения: 'ru' 'en'.
let lang = prompt("Введите язык перевода 'ru' / 'en'");
// Написать условия при котором в зависимости от значения lang будут выводится дни
// недели на русском или английском языке. Решите задачу
// через if, 
// через switch-case 
// через многомерный массив без ифов и switch.


if (lang == "ru") {
    console.log(" Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
} else
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday ");

switch (lang) {
    case "ru":
        console.log(" Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
        break;
    case "en":
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday ");
        break;
    default:
        console.log(" Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
        break;
}
langArray = [
    ['ru',
        'en'
    ],
    ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье',
        '"Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday "'
    ]
];


// не понял как без if и switch сделать с Многомерным массивом
let choosedLang = (lang == "ru") ? langArray[1][0] : langArray[1][1];
console.log(choosedLang);

// У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль
// “дsdsиректор”, если значение “Максим” то вывести в консоль “преподаватель”, с любым другим
// значением вывести в консоль “студент”
// 	Решить задачу с помощью нескольких тернарных операторов, без использования if или switch

let namePerson = prompt('Введите имя : ');
namePerson.toLowerCase();
namePerson = (namePerson == "артем") ? console.log('дsdsиректор') :
    (namePerson == 'максим') ? console.log('преподаватель') : console.log("студент");