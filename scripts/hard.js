// let num = 266219,
//     numArray,
//     sum = 1;
// numArray = String(num);
// numArray = numArray.match(/.{1}/g); // -- хотел бы лучше узнать об этом
// console.log(numArray);
// for (let i = 0; i < numArray.length; i++) {
//     sum = sum * numArray[i];
//     console.log(sum);
// }
// numArray = 0;
// sum = (sum * sum) * sum;
// numArray = String(sum);
// // numArray = numArray.match(/.{1}/g);
// console.log("Число :  " + numArray);

// console.log("Число :  " + numArray.substr(0, 2));



// const checkString = function (itemForCheck) {
//     if (typeof itemForCheck != 'string') {

//         return "PLS CHECK AGAIN, NOT A STRING!";
//     } else {
//         return itemForCheck.substr(0, 30) + "...";
//     }

// };
// console.log(checkString(121));
// console.log(checkString("123456789123456789123456789000ERROR"));


// 1) Создать массив arr = []
// — Записать в него 7 любых многозначных чисел в виде строк
// — Вывести в консоль только те, что начинаются с цифры 2 или 4(Должны присутствовать в массиве)
//'1', '2', '2', '3', '4', '5'
let arr = ['0'];

for (let i = 0; i <= 6; i++) {
    arr[i] = String(prompt("Запиши число: "));
    //parseInt([i]);
    console.log([i]);

}
console.log('------------------------');

for (let i = 0; i < arr.length; i++) {
    if (arr[i].substr(0) == '2' || arr[i].substr(0) == '4') {
        console.log("THESAME:::" + arr[i].substr(0));
    }

}

console.log(arr);
console.log('------------prostie------------');
for (let i = 0; i < 100; i++) {
    if (i % 2 == '1')
        console.log("4islo:  " + i + ` Делители данного числа : 1 и ${i}`);
}
