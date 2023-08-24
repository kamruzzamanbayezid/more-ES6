class vehicle {
      constructor(name, price) {
            this.name = name;
            this.price = price;
      }
}

class Bus {
      constructor(name,price,seat,ticketPrices){
            super(name,price);
            this.seat = seat;
            this.ticketPrices = ticketPrices;
      }
}

