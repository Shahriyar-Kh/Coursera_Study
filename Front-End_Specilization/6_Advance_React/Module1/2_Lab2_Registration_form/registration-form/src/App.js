// Import styling for this component
import './App.css';

// Import useState hook to manage state inside the functional component
import { useState } from "react";

// Import a custom email validation function from a local file
// Make sure this file exists: src/utils.js and contains a named export `validateEmail`
import { validateEmail } from "../src/utils";

// A small reusable component to display an error if the password is too short
const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">
      Password should have at least 8 characters
    </p>
  );
};

// Main functional component
function App() {
  // State for first name input
  const [firstName, setFirstName] = useState("");

  // State for last name input
  const [lastName, setLastName] = useState("");

  // State for email input
  const [email, setEmail] = useState("");

  // State for password - stores both value and whether it has been touched (blurred)
  const [password, setPassword] = useState({
    value: "",         // actual password text
    isTouched: false,  // true if input was interacted with (used to show error only after blur)
  });

  // State for user role (dropdown selection)
  const [role, setRole] = useState("role"); // default is placeholder value

  // A helper function that checks whether all fields are valid
  const getIsFormValid = () => {
    return (
      firstName &&                       // first name is not empty
      validateEmail(email) &&           // email is valid
      password.value.length >= 8 &&     // password has 8 or more characters
      role !== "role"                   // role is selected (not default)
    );
  };

  // Clears all form inputs to initial (empty) state
  const clearForm = () => {
    setFirstName("");     // clear first name
    setLastName("");      // clear last name
    setEmail("");         // clear email
    setPassword({         // reset password object
      value: "",
      isTouched: false,
    });
    setRole("role");      // reset role dropdown
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();           // prevent default page reload
    alert("Account created!");    // show success alert
    clearForm();                  // reset form fields
  };

  // Return the JSX to render the form
  return (
    <div className="App">
      {/* Form with submit handler */}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>

          {/* First Name Field */}
          <div className="Field">
            <label>
              First name <sup>*</sup> {/* Required field indicator */}
            </label>
            <input
              value={firstName}                // bind state to input
              onChange={(e) => {
                setFirstName(e.target.value); // update state on change
              }}
              placeholder="First name"
            />
          </div>

          {/* Last Name Field */}
          <div className="Field">
            <label>Last name</label>
            <input
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);  // update state on change
              }}
              placeholder="Last name"
            />
          </div>

          {/* Email Field */}
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);     // update state on change
              }}
              placeholder="Email address"
            />
          </div>

          {/* Password Field */}
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              value={password.value}          // bind value from password state
              type="password"                 // mask input
              onChange={(e) => {
                // update only value, preserve isTouched
                setPassword({ ...password, value: e.target.value });
              }}
              onBlur={() => {
                // set isTouched to true when input loses focus
                setPassword({ ...password, isTouched: true });
              }}
              placeholder="Password"
            />
            {/* Conditionally show error message if password too short */}
            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>

          {/* Role Dropdown */}
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select
              value={role}                // bind dropdown to state
              onChange={(e) => setRole(e.target.value)} // update state on change
            >
              <option value="role">Role</option>           {/* Default placeholder */}
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>

          {/* Submit button is disabled if form is not valid */}
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

// Export component so it can be used in index.js or other files
export default App;
