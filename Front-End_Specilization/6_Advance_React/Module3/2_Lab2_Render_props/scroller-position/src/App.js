// Import the global CSS styling
import "./App.css";

// Import required hooks from React
import { useEffect, useState } from "react";

// ✅ MousePosition Component
// This component uses the render props pattern to track the mouse position
const MousePosition = ({ render }) => {
  // Declare state to hold mouse coordinates using useState
  const [mousePosition, setMousePosition] = useState({
    x: 0, // Initial horizontal position
    y: 0, // Initial vertical position
  });

  // useEffect hook runs once after the component mounts
  useEffect(() => {
    // Function to update mouse position
    const handleMousePositionChange = (e) => {
      // e.clientX = horizontal mouse position
      // e.clientY = vertical mouse position
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    // Add event listener to track mouse movement
    window.addEventListener("mousemove", handleMousePositionChange);

    // Cleanup: remove event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []); // Empty dependency array = run once on mount

  // Render whatever the caller passes via the render prop,
  // injecting mousePosition as an argument
  return render({ mousePosition });
};

// ✅ PanelMouseLogger Component
// A presentational component using MousePosition to show data in a styled box
const PanelMouseLogger = () => {
  // Returns UI to display mouse coordinates in a panel layout
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>

      {/* Use MousePosition with a render prop function */}
      <MousePosition
        render={({ mousePosition }) => (
          // Destructure mousePosition and display coordinates
          <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        )}
      />
    </div>
  );
};

// ✅ PointMouseLogger Component
// Another example using the same MousePosition logic, but with a different display
const PointMouseLogger = () => {
  return (
    <MousePosition
      render={({ mousePosition }) => (
        // Show coordinates as a simple (x, y) point
        <p>
          ({mousePosition.x}, {mousePosition.y})
        </p>
      )}
    />
  );
};

// ✅ App Component - Root of the React app
function App() {
  return (
    <div className="App">
      {/* App Header */}
      <header className="Header">Little Lemon Restaurant 🍕</header>

      {/* Track mouse and show formatted coordinates */}
      <PanelMouseLogger />

      {/* Track mouse and show coordinates as (x, y) */}
      <PointMouseLogger />
    </div>
  );
}

// Export App to make it available in index.js
export default App;
