// task 1 array distruction

const products = [
    ["Laptop", 1000],
    ["Phone", 500],
    ["Tablet", 700]
];
// Destructure the second product's name and price from the array
const [, [secondProductName, secondProductPrice]] = products

console.log(`Second product: ${secondProductName}`);
console.log(`Second product price: ${secondProductPrice}`);

// object distructions

// Define an object named 'review' with four properties: title, description, author, and timePosted
const review = {
    title: "Amazing Product", // Title of the review
    description: "This product exceeded my expectations.", // Detailed comment about the product
    author: "John Doe", // Name of the reviewer
    timePosted: "2024-11-24" // Date when the review was posted
};

// Destructure the author, title, and timePosted properties from the review object
// This extracts the specified keys from the object and stores them in variables with the same names
const {author, title, timePosted} = review;

// Use a template literal to format and print the destructured values in a single string
console.log(`${author} posted a review titled, ${title} at ${timePosted}.`);
// Output: "John Doe posted a review titled, Amazing Product at 2024-11-24."
