// Task 1
// Create the logDairy function and use a for...of loop to log each item in the dairy array
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];  // fixed typo: 'milkshak' → 'milkshake'

function logDairy() {
    // Using for...of to get each element (value) directly
    for (const item of dairy) {
        console.log(item);  // logs each dairy product on a new line
    }
}

logDairy();  // Call the function


// Task 2
// Create the birdCan function and use a for...of loop to log bird object's own properties
const animal = {
    canJump: true  // parent property
};

const bird = Object.create(animal);  // bird inherits from animal
bird.canFly = true;                  // own property
bird.hasFeathers = true;            // own property

function birdCan() {
    // Object.keys gets only the own enumerable properties
    for (const key of Object.keys(bird)) {
        // Fixed: added space after colon
        console.log(key + ": " + bird[key]);
    }
}

birdCan();  // Call the function


// Task 3
// Create the animalCan function and use a for...in loop to log all bird properties, including inherited ones
function animalCan() {
    // for...in loops over all enumerable properties, including inherited ones
    for (const key in bird) {
        // Fixed: added space after colon
        console.log(key + ": " + bird[key]);
    }
}

animalCan();  // Call the function
