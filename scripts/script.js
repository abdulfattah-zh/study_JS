"use strict";
let isNumber = function (n) {
    return !isNaN(parseFloat(n) && isFinite(n));
};

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

let gameBot = function () {
    let gameNumber = Math.ceil(getRandom(1, 100));
    console.log(gameNumber);
    let gameStart = function (gameNumber) {
        let userNumber = prompt("Введите число от 1  до 100");

        console.log("type of : -" + typeof userNumber);

        if (isNumber(userNumber)) {
            //--
            if (userNumber > gameNumber) {
                alert("Загаданное число меньше");
                gameStart(gameNumber);
            } else if (userNumber < gameNumber) {
                alert("Загаданное число больше");
                gameStart(gameNumber);
            } else {
                alert("Загаданное число : " + gameNumber + " WIN!!!");
            }
            //--
        } else if (typeof userNumber === "string") {
            alert("Введите число!");
            gameStart(gameNumber);
        } else {
            return alert("Game Canceled");
        }
    };
    return gameStart(gameNumber);
};
gameBot();