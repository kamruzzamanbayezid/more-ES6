const products = [
      { id: 1, name: 'lenovo', price: 50000 },
      { id: 2, name: 'dell', price: 40000 },
      { id: 3, name: 'hp', price: 45000 },
      { id: 4, name: 'mac', price: 55000 },
]

const name = products.map(product => product.name);
console.log(name);

products.forEach(p => console.log(p.id));

const under50 = products.filter(prices => prices.price < 50000);
console.log(under50);

const id = products.reduce((p, c) => p + c.id, 0);
console.log(id);

const total = products.reduce((p, c) => p + c.price, id);
console.log(total);
