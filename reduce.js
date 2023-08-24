const numbers = [10, 50, 60, 45, 79, 99, 20, 30, 48, 55];

const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);

const sum = numbers.reduce((p, c) => p + c, 0);
console.log(sum);