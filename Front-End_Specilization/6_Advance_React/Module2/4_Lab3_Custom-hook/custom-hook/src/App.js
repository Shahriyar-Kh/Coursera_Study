// ✅ Importing required hooks from React
import { useState, useEffect, useRef } from "react";

// ✅ Main component App
export default function App() {
  // ✅ useState to keep track of current day
  const [day, setDay] = useState("Monday");

  // ✅ usePrevious custom hook to get previous value of 'day'
  const prevDay = usePrevious(day);

  // ✅ Function to update the day state to next working day
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday"); // ✅ Monday -> Tuesday
    } else if (day === "Tuesday") {
      setDay("Wednesday"); // ✅ Tuesday -> Wednesday
    } else if (day === "Wednesday") {
      setDay("Thursday"); // ✅ Wednesday -> Thursday
    } else if (day === "Thursday") {
      setDay("Friday"); // ✅ Thursday -> Friday
    } else if (day === "Friday") {
      setDay("Monday"); // ✅ Friday -> Monday (loop back)
    }
  };

  // ✅ UI rendering
  return (
    <div style={{ padding: "40px" }}>
      <h1>
        Today is: {day}
        <br />
        {
          // ✅ Display previous day if available
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
      </h1>
      
      {/* ✅ Button to trigger getNextDay */}
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );
}

// ✅ Custom hook to remember previous value
function usePrevious(value) {
  const ref = useRef(); // ✅ Create a mutable reference

  useEffect(() => {
    ref.current = value; // ✅ Update ref with latest value
  }, [value]); // ✅ Run when 'value' changes

  return ref.current; // ✅ Return the previous value
}
