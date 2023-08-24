const person = [{ id: 1, name: 'abul', address: 'kochu khet' }];

console.log(person[0].address);

const products = {
      count: 5000,
      data: [
            {name: 'samsung', price: 50000, camera: '25MP'},
            {name: 'iPhone', price: 70000, camera: '35MP'},
      ]
}

console.log(products.data[1].price);

const user = {
      id: 5001,
      name: 'shoriful raj',
      address: {
            street: {
                  first: '54/7 uttor side',
                  second: '45/7 dokkhin side',
                  third: 'no dorai',
            },
            city: 'gilshan'
      }
}

console.log(user.address.street.second);