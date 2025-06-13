// ✅ Import React library to use JSX, components, hooks, etc.
import React from "react";

// ✅ Define the main functional component
function App() {
  // ✅ Declare a state variable `user`, initialized as an empty array
  // ✅ `setUser` is the function to update `user`
  const [user, setUser] = React.useState([]);

  // ✅ Function to fetch data from external API
  const fetchData = () => {
    // ✅ `fetch` sends HTTP GET request to the Random User API
    fetch("https://randomuser.me/api/?results=1")
      // ✅ Convert the response into JSON format
      .then((Response) => Response.json())
      // ✅ Set the received data into the `user` state
      .then((data) => setUser(data));
  };

  // ✅ useEffect hook runs the fetchData function **only once**
  // ✅ The empty array `[]` means it runs on component mount
  React.useEffect(() => {
    fetchData();
  }, []);

  // ✅ Conditionally render content: if user has keys (i.e., data loaded)
  return Object.keys(user).length > 0 ? (
    // ✅ If true, show customer data
    <div>
      <h1>Customer data</h1>
      {/* ✅ Show the first name of the user from fetched data */}
      <h2>Name: {user.results[0].name.first}</h2>
      {/* ✅ Display the user image from API data */}
      <img src={user.results[0].picture.large} alt="" />
    </div>
  ) : (
    // ✅ If data not yet loaded, show this message
    <h1>Data pending...</h1>
  );
}

// ✅ Export the App component to be used in other files
export default App;
