"use strict";

class First {
    hello() {
        console.log("Привет Я Метод родителя by First");
    }
}
class Second extends First {
    hello() {
        super.hello();
        console.log("Привет А я наследуемый метод by Second ");
    }
}
let firstSecond = new Second();
console.log(firstSecond.hello());