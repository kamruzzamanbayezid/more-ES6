class Person {
      constructor(name, age) {
            this.name = name;
            this.age = age;
      }
      drive() {
            console.log(`${this.name} is driving a car at the age of ${this.age}!`);
      }
}
const kodom = new Person('Kodom Ali', 69);
// console.log(kodom);
// kodom.drive();

const sobor = new Person('Sobor Khan', 63);
// sobor.drive()


class NewPerson {
      constructor(name, age) {
            this.name = name;
            this.age = age;
      }

      isSleeping() {
            console.log(`${this.name} is sleeping now`);
      }

      activity(){ 
            this.isSleeping();
      }
};

const bayezid = new NewPerson('Bayezid Khan', 24);
bayezid.activity()
console.log(bayezid);
