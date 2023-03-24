'use strict'

class Person {
  constructor(name, lastName, country) {
    //{

    //}

    (this.name = name),
      (this.lastName = lastName),
      (this.fullName = `${name} ${lastName}`);
    (this.country = country), (this.traveldCountries = []);
  }

  calcAge(birthYear) {
    // console.log(birthYear)

    const age = new Date().getFullYear() - birthYear;

    this.age = age;
    return "the age is calculated and added to the object";
  }

  addCountry(nameOfCountry) {
    this.traveldCountries.push(nameOfCountry);
  }

  removeCountry(removingCountry) {
    const filtered = this.traveldCountries.filter(
      (item) => item !== removingCountry
    );

    this.traveldCountries = filtered;

    console.log(filtered);
  }
}

const mohammad = new Person("Mohammad", "Bayasi", "Syria");

//  console.log(mohammad)

// console.log(mohammad.calcAge(1996))

// mohammad.addCountry('Germany')
// mohammad.addCountry('Italy')
// mohammad.addCountry('Turkey')

// mohammad.removeCountry("Italy")

// mohammad.removeCountry("Spain")

class Student extends Person {
  constructor(name, lastName, country, course) {
    super(name, lastName, country);

    (this.course = course), (this.lessons = []);
  }

  addLessons(lesson) {
    return !this.lessons.includes(lesson)
      ? this.lessons.push(lesson)
      : "the lesson alredy exist";
  }
}

const david = new Student("david", "Gonzalez", "Spain", "E05");

console.log(david);
david.addCountry("France");
david.addCountry("Italy");

david.addLessons("Math");
david.addLessons("Physics");
david.addLessons("Physics");
console.log(david.addLessons("Math"));

david.calcAge(1994);

// class CoffeeShop {
//   constructor(name, menu) {
//     this.name = name;
//     this.menu = menu;
//     this.orders = [];
//   }
//  static shopName = () => this.name;
//   addOrder = (item) => {
//     if (this.menu.filter((m) => m.item == item).length) {
//       this.orders.push(item);
//       return "Order added!";
//     }
//     return "This item is currently unavailable!";
//   };
//   fulfillOrder = () =>
//     this.orders.length
//       ? `The ${this.orders.shift()} is ready!`
//       : "All orders have been fulfilled!";
//   listOrders = () => this.orders;
//   dueAmount = () =>
//     +this.orders
//       .reduce((t, x) => t + this.menu.filter((m) => m.item == x)[0].price, 0.0)
//       .toFixed(2);
//   cheapestItem = () =>
//     this.menu.reduce(
//       ([n, p], x) => (x.price < p ? [x.item, x.price] : [n, p]),
//       ["", 100.0]
//     )[0];
//   drinksOnly = () =>
//     this.menu.filter((m) => m.type == "drink").map((n) => n.item);
//   foodOnly = () => this.menu.filter((m) => m.type == "food").map((n) => n.item);
// }


// const sth = new CoffeeShop("FSDFSDFADS",{drink:"coffe"})

// console.log(CoffeeShop.shopName())



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


function totalPrice(cart) {
  return cart.reduce((acc, currentItem) => {
return !acc ? acc : acc.includes(currentItem.type)
    // if (!acc) acc = [];
    // if (acc.includes(currentItem.type)) return acc;
    // else return acc.push(currentItem.type);
  }, []);
}

console.log(totalPrice(cart));