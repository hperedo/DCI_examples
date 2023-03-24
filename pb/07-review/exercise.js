const cart = [
  {
    type: 't-shirt',
    price: 9.99,
    color: 'white',
  },
  {
    type: 'shoes',
    price: 49.99,
    color: 'dark green',
  },
  {
    type: 'jeans',
    price: 19.99,
    color: 'blue',
  },
  {
    type: 'shirt',
    price: 12.99,
    color: 'black',
  },
  {
    type: 'hoodie',
    price: 19.99,
    color: 'blue',
  },
  {
    type: 'hat',
    price: 9.99,
    color: 'red',
  },
  {
    type: 't-shirt',
    price: 19.99,
    color: 'yellow',
  },
  {
    type: 't-shirt',
    price: 29.99,
    color: 'silver',
  },
  {
    type: 'jacket',
    price: 49.99,
    color: 'black',
  },
];

// apply 10% discount to all products priced above 30
function receipt(cart) {
  // make a new array with discounted price
  const discountedList = cart.map((item) => {
    const newItem = { ...item };
    if (newItem.price > 30) {
      newItem.price -= newItem.price * 0.1;
    }
    return newItem;
  });

  // find the total discounted price
  const totalPrice = discountedList.reduce((acc, curr) => {
    return (acc += curr.price);
  }, 0);

  // create an receipt object showing total price of each item
  const receipt = discountedList.reduce((acc, curr) => {
    if (acc[curr.type]) {
      acc[curr.type] += curr.price;
    } else {
      acc[curr.type] = curr.price;
    }
    return acc;
  }, {});

  // add the totalPrice to the receipt object
  receipt.totalPrice = Number(totalPrice.toFixed(2));

  // return the receipt
  return receipt;
}

console.log(receipt(cart));

/**
 * {
  't-shirt': 59.97,
  shoes: 44.991,
  jeans: 19.99,
  shirt: 12.99,
  hoodie: 19.99,
  hat: 9.99,
  jacket: 44.991,
  totalPrice: 212.91
}
 */
