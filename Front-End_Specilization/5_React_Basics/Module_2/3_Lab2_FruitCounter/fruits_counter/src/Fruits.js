// Import React to define the functional component
import React from "react";

// Receive `fruits` as a prop from the parent (App)
function Fruits({ fruits }) {
  return (
    <div>
      {/* Loop through the fruits array and display each fruit name */}
      {fruits.map((f) => (
        <p key={f.id}>{f.fruitName}</p>  // Use unique key for each item (React best practice)
      ))}
    </div>
  );
}

export default Fruits;
