/**
 * ******* Object static methods
 */

const shoppingCart = {
  shirt: 5,
  pant: 3,
  shoes: 1,
  bag: 5,
  push(item, quantity) {
    this[item] = quantity;
  },
};

shoppingCart['shirt'] = 6;
shoppingCart['sun glass'] = 6;

shoppingCart.push('watch', 1);

const keyNames = Object.keys(shoppingCart); // ['shirt', 'pant', 'shoes', 'bag', 'push', 'watch']
console.log(keyNames);

const valuesList = Object.values(shoppingCart);
console.log(valuesList);

// const entriesList = Object.entries(shoppingCart);
// console.log(entriesList);

// console.log(Array.isArray(entriesList));
