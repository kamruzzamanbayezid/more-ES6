// // Task 1
const oddArray = [1, 3, 5, 7, 9];

const makeEven = arr => {

      // using map
      const newArr = arr.map(element => element + 1);
      // return newArr;

      // using for loop
      const newArr2 = [];
      for (let element of arr) {
            element = element + 1;
            newArr2.push(element);
      }
      return newArr2
}

// console.log(makeEven(oddArray));

// Task 2
const arr = [33, 50, 79, 78, 90, 101, 30];

const divisibleArrBy10 = arr.filter(element => element % 10 === 0);
const divisibleArrBy2 = arr.find(element => element % 2 === 0);
// console.log(divisibleArrBy10);
// console.log(divisibleArrBy2);

// // Task 3

const instructor = [
      { name: 'nodi', age: 28, position: 'Senior' },
      { name: 'akhil', age: 26, position: 'Junior' },
      { name: 'Sakil', age: 27, position: 'Senior' },

];

const seniorInstructor = instructor.filter(element => element.position === 'Senior');
// console.log(seniorInstructor);

// Task 4
const people = [
      { name: 'Meena', age: 20 },
      { name: 'Keena', age: 15 },
      { name: 'Reena', age: 22 }
];

const sumOfAge = people.reduce((p, c) => p + c.age, 0);
console.log(sumOfAge);