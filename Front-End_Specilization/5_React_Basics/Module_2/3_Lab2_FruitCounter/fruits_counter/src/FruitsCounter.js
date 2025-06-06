// Import React to define the functional component
import React from "react";

// Receive `fruits` as a prop from the parent (App)
function FruitsCounter({ fruits }) {
  return (
    <div>
      {/* Display total number of fruits using array length */}
      <p>Total fruits: {fruits.length}</p>
    </div>
  );
}

export default FruitsCounter;
