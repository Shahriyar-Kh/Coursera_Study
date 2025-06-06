// Import necessary React functions and components
import React, { useState } from "react";
import Fruits from "./Fruits";             // Import the Fruits component
import FruitsCounter from "./FruitsCounter"; // Import the FruitsCounter component

function App() {
  // Declare a state variable `fruits` and initialize it with an array of fruit objects
  const [fruits] = useState([
    { fruitName: 'apple', id: 1 },
    { fruitName: 'apple', id: 2 },
    { fruitName: 'plum', id: 3 },
  ]);

  // Return the JSX to render
  return (
    <div className="App">
      {/* Heading */}
      <h1>Where should the state go?</h1>

      {/* Pass fruits as props to Fruits and FruitsCounter */}
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  );
}

export default App;
