
// Original data from third-party (e.g., API)
const data = [
  {
    id: 1,
    title: "Chocolate Cake",
    image: "chocolate.jpg",
    description: "Rich and creamy",
    price: "$5"
  },
  {
    id: 2,
    title: "Lemon Tart",
    image: "lemon.jpg",
    description: "Tangy and sweet",
    price: "$4"
  },
  {
    id: 3,
    title: "Vanilla Ice Cream",
    image: "vanilla.jpg",
    description: "Classic delight",
    price: "$3"
  }
];

// Transform the data using map()
const topDesserts = data.map(dessert => {
  return {
    content: `${dessert.title} - ${dessert.description}`,
    price: dessert.price
  };
});

// Output the transformed list
console.log(topDesserts);
// ✅ Output:
// [
//   { content: "Chocolate Cake - Rich and creamy", price: "$5" },
//   { content: "Lemon Tart - Tangy and sweet", price: "$4" },
