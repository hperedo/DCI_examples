/*************
 * ******* Iterating through an object // for-in-loop
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

/**
 * ********** for-in loop
 */

for (let key in shoppingCart) {
  console.log(key, shoppingCart[key]);
}

/**
 ******** The 'in' operator
 */

if ('elephant' in shoppingCart) {
  console.log('yes');
} else {
  console.log('no');
}

const result = 'pant' in shoppingCart ? 'yes' : 'no';
console.log(result);
