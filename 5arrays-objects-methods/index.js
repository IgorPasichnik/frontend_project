"use strict";
const num = [100, 150, 200, 250];
const price = num.map((currentNum) => {
    let addPrice = currentNum + " р";
    return addPrice;
});
console.log(price);
const users = [
    ["alex", 32],
    ["tomas", 17],
    ["olga", 14],
    ["andre", 24],
];
const minAge = 18;
const adultUser = users.filter((currentUser) => {
    if (minAge < currentUser[1])
        return true;
    else
        return false;
});
console.log(adultUser);
const store = [
    { title: "пицца", price: 200 },
    { title: "баранина", price: 300 },
    { title: "креветки", price: 400 },
];
const sumProduct = store.reduce((accumulator, currentProduct) => {
    return accumulator + currentProduct.price;
}, 0);
console.log(sumProduct);
