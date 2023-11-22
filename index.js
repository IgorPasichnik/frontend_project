// Задание 1
// function MyUser(name) {
//   this.name = name;
// }
// MyUser.prototype.getName = getName;
// function getName() {
//   console.log(this.name);
// }
// const user1 = new MyUser("Alex");
// const user2 = new MyUser("Vlad");
// user1.getName();
// user2.getName();

// function Calculator(read, sum, mul) {
//   this.read = function () {
//     this.a = +prompt("a?", "");
//     this.b = +prompt("b?", "");
//   };
//   this.sum = function () {
//     return this.a + this.b;
//   };
//   this.mul = function () {
//     return this.a * this.b;
//   };
// }
// let calculator = new Calculator();
// calculator.read();
// alert("Sum = " + calculator.sum());
// alert("Mul = " + calculator.mul());

// function Accumulator(startibngValue) {
//   this.value = startibngValue;
//   this.read = function () {
//     this.value += +prompt("num?", 0);
//   };
// }
// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);

// Задание 2
// function sum(a) {
//     return function(b) {
//       return a + b;
//     };
//   }

// function makeArmy() {
//   let shooters = [];
//   for (let i = 0; i < 10; i++) {
//     let shooter = function () {
//       console.log(i);
//     };
//     shooters.push(shooter);
//     i++;
//   }
//   return shooters;
// }
// let army = makeArmy();
// army[0]();
// army[1]();
// army[2]();

// Задание 3
// let vasya = { name: "Вася", age: 26 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [vasya, petya, masha];
// let names = users.map((item) => item.name);
// console.log(names);

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
// let users = [vasya, petya, masha];
// let usersMapped = users.map((user) => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id,
// }));
// console.log(usersMapped[0].id);
// console.log(usersMapped[0].fullName);
