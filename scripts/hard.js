"use strict";
let isNumber = function (n) {
    return !isNaN(parseFloat(n) && isFinite(n));
};

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

let gameBot = function () {
    let gameNumber = Math.ceil(getRandom(1, 100));
    let flag = 10;
    console.log(gameNumber);
    let gameStart = function (gameNumber) {
        let userNumber = prompt("Введите число от 1  до 100");

        console.log("type of : -" + typeof userNumber);

        if (isNumber(userNumber)) {
            //--
            if (flag >= 2) {
                if (userNumber > gameNumber) {
                    flag--;
                    alert("Загаданное число меньше, осталось попыток : " + flag);
                    gameStart(gameNumber);
                } else if (userNumber < gameNumber) {
                    flag--;
                    alert("Загаданное число больше, осталось попыток : " + flag);
                    gameStart(gameNumber);
                } else {
                    let win = "Загаданное число : " + gameNumber + " WIN!!! \n";
                    let chose = confirm(win + "Хотели бы сыграть еще?");
                    if (chose) gameBot();
                    else alert("Thanks for game!");
                }
            } else {
                alert("У вас не осталось попыток :c");
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