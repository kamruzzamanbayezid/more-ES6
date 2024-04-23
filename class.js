const products = [
      { id: 1, name: 'lenovo', price: 50000 },
      { id: 2, name: 'dell', price: 40000 },
      { id: 3, name: 'hp', price: 45000 },
      { id: 4, name: 'mac', price: 55000 },
]

class Products {
      country = `Bangladesh`;
      speak(talk) {
            console.log(`Talking about ${talk}`);
      }
}

const lenovo = new Products();
console.log(lenovo);
lenovo.speak('Global warming');

class Teacher {
      constructor(name, subject) {
            this.name = name;
            this.subject = subject;
      }
}

const taposh = new Teacher('Taposh', 'English');
// console.log(taposh);

const joynal = new Teacher('Joynal', 'ICT');
// console.log(joynal);

class Player {

      constructor(name, profession, age) {
            this.name = name;
            this.profession = profession;
            this.age = age;
      };

      country = 'Bangladesh';
}

const sakib = new Player('Sakib', 'Cricketer', 35);
const musfiq = new Player('Musfiq', 'Hockey', 32);
const mehedi = new Player('Mehedi', 'Footballer', 25);

// console.log(sakib);
// console.log(musfiq);
// console.log(mehedi);

class Developer{ 
      constructor(name,age,profession){ 
            this.name=name;
            this.age=age;
            this.profession=profession;
      };
}

const bayezid = new Developer('Kamruzzaman Bayezid', 24, 'Web Developer');
console.log(bayezid);