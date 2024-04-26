class vehicle {
      constructor(name, price) {
            this.name = name;
            this.price = price;
      }

      move(bari) {
            console.log(`Gari jabe ${bari} bari, Songge jabe ke??`);
      }
};

class Bus extends vehicle {
      constructor(name, price, company, madeBy) {
            super(name, price);
            this.company = company;
            this.madeBy = madeBy;
      }
}

const bus = new Bus('Hanif', 10000, 'Volvo', 'Japan');
// bus.move('Shosur')
// console.log(bus);


class Animal {
      constructor(name, age) {
            this.name = name;
            this.age = age;
      }

      speak() {
            console.log(`${this.name} is a dangerous animal`);
      }
};

class Bird extends Animal {
      constructor(name, age, sound, color) {
            super(name, age)
            this.sound = sound
            this.color = color
      }
}

const owl = new Bird('Owl', 22, 'Gogo', 'black');
owl.speak();
console.log(owl);
const Bador = new Bird('Bador', 32, 'Bobo', 'brown');
Bador.speak();
console.log(Bador);