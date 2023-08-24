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
console.log(taposh);

const joynal = new Teacher('Joynal', 'ICT');
console.log(joynal);