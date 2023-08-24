const arr = [10, 50, 60, 45, 79, 99, 20, 30, 48, 55];

const result = arr.filter(array => array > 20);
console.log(result);

const evenNumbers = arr.filter(even => even % 2 === 0);
console.log(evenNumbers);

const oddNumbers = arr.filter(odd => odd % 2 === 1);
console.log(oddNumbers);

const friends = ['salam', 'kashem', 'halima', 'rahmatullah'];

const evenCharacter = friends.filter(friend => friend.length % 2 === 0);
console.log(evenCharacter);