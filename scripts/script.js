"use strict"

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

let gameBot = function () {

    let gameNumber = getRandom(1, 100);

    let userNumber = +prompt("Введите число от 1  до 100");




};