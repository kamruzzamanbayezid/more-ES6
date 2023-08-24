// Task 1
const oddArray = [1, 3, 5, 7, 9];

const oddArrayToEvenArray = oddNumbers => oddNumbers + 1;
const evenNumbersArray = oddArray.map(oddArrayToEvenArray);
console.log(evenNumbersArray);

const oddArrayToEvenArray2 = oddNumbers => {
      let evenArray = [];
      for (const oddnumber of oddNumbers) {
            evenArray.push(oddnumber + 1)
      }
      return evenArray;
}

console.log(oddArrayToEvenArray2(oddArray));

// Task 2

const arr = [33, 50, 79, 78, 90, 101, 30];

const divisibleElements = divisible => divisible % 10 === 0;

const divisibleArray = arr.filter(divisibleElements);
console.log(divisibleArray);

const arrFind = arr.find(divisible => divisible % 10 === 0);
console.log(arrFind);


// Task 3

const instructor = [
      { name: 'nodi', age: 28, position: 'Senior' },
      { name: 'akhil', age: 26, position: 'Junior' },
      { name: 'Sakil', age: 27, position: 'Senior' },

]

const seniorInstructor = instructor.filter(person => person.position === 'Senior');
console.log(seniorInstructor);

// Task 4

const people = [
      { name: 'Meena', age: 20 },
      { name: 'Keena', age: 15 },
      { name: 'Reena', age: 22 }
]

const sum = people.reduce((previous, current) => previous + current.age, 0);
console.log(sum);

const totalOfAge = elements => {
      let total = 0;
      for (const element of elements) {
            total = total + element.age;
      }
      return total;
};

const result = totalOfAge(people);
console.log(result);