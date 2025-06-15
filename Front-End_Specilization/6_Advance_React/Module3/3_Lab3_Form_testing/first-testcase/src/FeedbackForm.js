// Importing styles from App.css
import "./App.css";

// Importing useState hook from React to manage component state
import { useState } from "react";

// Defining the FeedbackForm functional component, expecting a prop called onSubmit
function FeedbackForm({ onSubmit }) {
  // Declaring a state variable 'score' initialized to "10", and its setter 'setScore'
  const [score, setScore] = useState("10");

  // Declaring a state variable 'comment' initialized to an empty string
  const [comment, setComment] = useState("");

  // Form submit button should be disabled if:
  // score is less than 5 AND the comment is 10 characters or less
  const isDisabled = Number(score) < 5 && comment.length <= 10;

  // Conditional placeholder text for the comment textarea
  const textAreaPlaceholder = isDisabled
    ? "Please provide a comment explaining why the experience was not good. Minimum length is 10 characters." // If disabled, instruct user to give feedback
    : "Optional feedback"; // If not disabled, comment is optional

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission behavior (like page reload)
    onSubmit({ score, comment }); // Calls the onSubmit prop with current score and comment
  };

  // The UI returned by the component
  return (
    <div className="App"> {/* Wrapper div with class for styling */}
      <form onSubmit={handleSubmit}> {/* Form element with submit handler */}
        <fieldset> {/* Groups form fields for better semantics */}
          <h2>Feedback form</h2> {/* Heading of the form */}

          {/* Score input field */}
          <div className="Field">
            <label htmlFor="score">Score: {score} ⭐</label> {/* Label showing selected score */}
            <input
              id="score" // For associating label
              value={score} // Controlled input bound to score state
              onChange={(e) => {
                setScore(e.target.value); // Updates score state when slider is moved
              }}
              type="range" // Slider input
              min="0" // Minimum score
              max="10" // Maximum score
            />
          </div>

          {/* Comment textarea */}
          <div className="Field">
            <label htmlFor="comment">Comments:</label> {/* Label for textarea */}
            <textarea
              id="comment" // For accessibility
              placeholder={textAreaPlaceholder} // Placeholder based on isDisabled condition
              name="comment" // Input name attribute
              value={comment} // Controlled input bound to comment state
              onChange={(e) => {
                setComment(e.target.value); // Updates comment state on typing
              }}
            />
          </div>

          {/* Submit button */}
          <button type="submit" disabled={isDisabled}>
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

// Exporting the FeedbackForm component so it can be used in other files
export default FeedbackForm;
