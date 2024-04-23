const numbers = [10, 50, 60, 45, 79, 99, 20, 30, 48, 55];

const total = numbers.reduce((previous, current) => previous + current, 0);
// console.log(total);

const sum = numbers.reduce((p, c) => p + c, 0);
// console.log(sum);


const numbers2 = [1, 6, 4, 3, 5, 9, 10];

let sumOfNumbers = 0;
for (let number of numbers2) {
      sumOfNumbers += number;
}
// console.log('Total using for of loop:', sumOfNumbers);

const totalOfArrElement = numbers2.reduce((previous, current) => previous + current, 0);

// console.log('Total using reduce:', totalOfArrElement);

const products = [
      { id: 1, name: 'lenovo', price: 50000 },
      { id: 2, name: 'dell', price: 40000 },
      { id: 3, name: 'hp', price: 45000 },
      { id: 4, name: 'mac', price: 55000 },
];

const reduce = products.reduce((p, c) => p + c.price, 0);
console.log(reduce);