// This takes in one object that MUST contain the name and type properties
function printPetDeets({ name:petName, type }) {
    console.log(petName, type)
}

const pet = {
    name: "Rauli",
    age: 9,
    type: "Cat"
}

printPetDeets(pet)