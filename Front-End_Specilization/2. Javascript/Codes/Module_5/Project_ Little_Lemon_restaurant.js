const { connected } = require("process");

// Dishes Data
const dishData = [
    { name: "Italian pasta", price: 9.55 },
    { name: "Rice with veggies", price: 8.65 },
    { name: "Chicken with potatoes", price: 15.55 },
    { name: "Vegetarian Pizza", price: 6.45 },
];

// Tax Value
const tax = 1.20;

// Task 1: Implement getPrices()
function getPrices(taxBoolean) {
    for (let item of dishData) {
        let finalPrice;
        if (taxBoolean === true) {
            finalPrice = item.price * tax;
        } else if (taxBoolean === false) {
            finalPrice = item.price;
        } else {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }
        console.log(`Dish: ${item.name} Price: $${finalPrice.toFixed(2)}`);
    }
}

// Task 2: Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);
    if (typeof guests === "number" && guests >= 0 && guests <= 30) {
        let discount = 0;
        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }
        console.log(`Discount is: $${discount}`);
    } else {
        console.log("The second argument must be a number between 0 and 30");
    }
}

// Sample calls
getDiscount(true, 2);
getDiscount(false, 10);