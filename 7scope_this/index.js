"use strict";
// Задание 1
class Calculator {
    constructor() {
        this.a = 0;
        this.b = 0;
    }
    read() {
        const inputA = prompt("a?", "");
        const inputB = prompt("b?", "");
        this.a = inputA ? +inputA : 0;
        this.b = inputB ? +inputB : 0;
    }
    sum() {
        return this.a + this.b;
    }
    mul() {
        return this.a * this.b;
    }
}
class Accumulator {
    constructor(startingValue) {
        this.value = startingValue;
    }
    read() {
        const inputNum = prompt("num?", "");
        this.value += inputNum ? +inputNum : 0;
    }
}
// Задание 2
function sum(a) {
    return function (b) {
        return a + b;
    };
}
function makeArmy() {
    let shooters = [];
    for (let i = 0; i < 10; i++) {
        let shooter = (function (num) {
            return function () {
                console.log(num);
            };
        })(i);
        shooters.push(shooter);
    }
    return shooters;
}
let army = makeArmy();
army[0]();
army[1]();
army[2]();
let vasya1 = { name: "Вася", age: 26 };
let petya1 = { name: "Петя", age: 30 };
let masha1 = { name: "Маша", age: 28 };
let users1 = [vasya1, petya1, masha1];
let names1 = users1.map((item) => item.name);
console.log(names1);
let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha2 = { name: "Маша", surname: "Петрова", id: 3 };
let users2 = [vasya2, petya2, masha2];
let usersMapped = users2.map((user) => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
}));
console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);
