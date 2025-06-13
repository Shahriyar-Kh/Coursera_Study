// LittleLemonApp.js
import { useState, useEffect } from "react";

// ✅ Component Definition
function LittleLemonApp() {
  // ✅ Define state to track toggle of welcome message
  const [toggle, setToggle] = useState(false);

  // ✅ Function to handle button click, toggling the state
  const clickHandler = () => {
    setToggle(prevToggle => !prevToggle);
  };

  /*
    ✅ useEffect Hook
    This hook runs after every render where the `toggle` value changes.
    It's used here to perform a side effect: updating the browser tab title.
  */
  useEffect(() => {
    // Update the document title depending on the toggle state
    document.title = toggle ? "Welcome to Little Lemon" : "Using the useEffect Hook";
  }, [toggle]); // ✅ Dependency array: run effect whenever `toggle` changes


    /*
    🔁 If you want this effect to run only once on component mount:
    useEffect(() => {
      document.title = "Using the useEffect Hook";
    }, []);
  */




  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>Little Lemon Welcome Section</h2>
      <button onClick={clickHandler}>Toggle Welcome Message</button>
      {toggle && <h3>Welcome to Little Lemon</h3>}
    </div>
  );
}

export default LittleLemonApp;
