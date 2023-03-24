// let output = [];

// for (let i = 1; i <= 3; i++) {
//   ///////
//   for (let k = 0; k <= 2; k++) {
//     console.log(i, k);
//   }
//   //////
// }
// console.log(output);

///////////////////////////////////////////////////////////////////////////
// for (let i = 100; i <= 1000; i += 100) {
//   console.log(i);
// }

// let actions = ["talk", "walk", "laugh", "cry"];
// let peoples = ["Agi", "Teng", "Rana", "Emmanuel", "Francis", "Diouani"];

// for (let i = 0; i < actions.length; i++) {
//   for (let j = 0; j < peoples.length; j++) {
//     console.log(`${peoples[j]} is ${actions[i]}ing`);
//   }
// }

for (let i = 1; i < 5; i++) {
  console.log("OUTERLOOP", i);
  for (let j = 4; j <= i; j--) {
    console.log("        INNERLOPP", j);
  }
}
