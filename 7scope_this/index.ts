// Задание 1

class Calculator {
  a: number = 0;
  b: number = 0;

  read() {
    const inputA: string | null = prompt("a?", "");
    const inputB: string | null = prompt("b?", "");

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
  value: number;

  constructor(startingValue: number) {
    this.value = startingValue;
  }

  read() {
    const inputNum: string | null = prompt("num?", "");

    this.value += inputNum ? +inputNum : 0;
  }
}

// Задание 2

function sum(a: number) {
  return function (b: number) {
    return a + b;
  };
}

function makeArmy() {
  let shooters = [];
  for (let i = 0; i < 10; i++) {
    let shooter = (function (num: number) {
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

// Задание 3

interface Person {
  name: string;
  age: number;
}

let vasya1: Person = { name: "Вася", age: 26 };
let petya1: Person = { name: "Петя", age: 30 };
let masha1: Person = { name: "Маша", age: 28 };
let users1: Person[] = [vasya1, petya1, masha1];
let names1: string[] = users1.map((item: Person) => item.name);
console.log(names1);

interface User {
  name: string;
  surname: string;
  id: number;
}

let vasya2: User = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2: User = { name: "Петя", surname: "Иванов", id: 2 };
let masha2: User = { name: "Маша", surname: "Петрова", id: 3 };
let users2: User[] = [vasya2, petya2, masha2];
let usersMapped = users2.map((user: User) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));
console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);
