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
bus.move('Shosur')
console.log(bus);
