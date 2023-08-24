const numbers = [4, 5, 6, 7, 10, 25];

// option 1
function doubled(number) {
      return number * 2;
}
const result = numbers.map(doubled);
console.log(result);

// option 2
const doubled2 = number2 => number2 * 2;
const result1 = numbers.map(doubled2);
console.log(result1);

// option 3
const result2 = numbers.map(number2 => number2 * 2);
console.log(result2);

// map recap

const arr = [5, 3, 6, 1, 2];

function persons(name) {
      return name * 10;
}
const output = arr.map(persons);
console.log(output);

const persons2 = name => name * 10;
const output2 = arr.map(persons2);
console.log(output2);

const output3 = arr.map(name => name * 10);
console.log(output3);


const friends = ['salam', 'kashem', 'halima', 'rahmatullah'];

const elementLength = friends.map(friend => {
      const length = friend.length;
      return length;
});
console.log(elementLength);

const firstLetter = friends.map(friend=>friend[0]);
console.log(firstLetter);