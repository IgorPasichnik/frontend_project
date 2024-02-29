const num: number[] = [100, 150, 200, 250];
const price: string[] = num.map((currentNum: number) => {
  let addPrice: string = currentNum + " р";
  return addPrice;
});
console.log(price);

const users: [string, number][] = [
  ["alex", 32],
  ["tomas", 17],
  ["olga", 14],
  ["andre", 24],
];
const minAge: number = 18;
const adultUser: [string, number][] = users.filter(
  (currentUser: [string, number]) => {
    if (minAge < currentUser[1]) return true;
    else return false;
  }
);
console.log(adultUser);

interface Product {
  title: string;
  price: number;
}

const store: Product[] = [
  { title: "пицца", price: 200 },
  { title: "баранина", price: 300 },
  { title: "креветки", price: 400 },
];
const sumProduct: number = store.reduce(
  (accumulator: number, currentProduct: Product) => {
    return accumulator + currentProduct.price;
  },
  0
);
console.log(sumProduct);
