// Import utilities from React Testing Library
import { fireEvent, render, screen } from "@testing-library/react";

// Import the FeedbackForm component to test
import FeedbackForm from "./FeedbackForm";

// Group related tests using describe block
describe("Feedback Form", () => {

  // First test case: ensures form submits correctly with low score + comment
  test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
    const score = "3"; // Test score input (less than 5)
    const comment = "The pizza crust was too thick"; // Valid comment (>10 chars)

    const handleSubmit = jest.fn(); // Mock function to test if it gets called with right arguments

    render(<FeedbackForm onSubmit={handleSubmit} />); // Render the FeedbackForm and pass in the mock submit function

    // Get the score input by its label text
    const rangeInput = screen.getByLabelText(/Score:/);

    // Simulate changing the score input to 3
    fireEvent.change(rangeInput, { target: { value: score } });

    // Get the comment textarea by its label text
    const textarea = screen.getByLabelText(/Comments:/);

    // Simulate entering a comment in the textarea
    fireEvent.change(textarea, { target: { value: comment } });

    // Get the submit button using its role
    const submitButton = screen.getByRole("button");

    // Simulate clicking the submit button
    fireEvent.click(submitButton);

    // Assert that the mock submit handler was called with the expected data
    expect(handleSubmit).toHaveBeenCalledWith({
      score,    // Should match the test score value
      comment,  // Should match the test comment value
    });
  });

  // Second test case: ensures form submits correctly with high score and no comment
  test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
    const score = "9"; // Test score input (greater than 5)
    const handleSubmit = jest.fn(); // Mock submit function

    render(<FeedbackForm onSubmit={handleSubmit} />); // Render the form with the mock submit function

    // Get the score input
    const rangeInput = screen.getByLabelText(/Score:/);

    // Simulate changing the score to 9
    fireEvent.change(rangeInput, { target: { value: score } });

    // Get the submit button
    const submitButton = screen.getByRole("button");

    // Simulate a click on the submit button
    fireEvent.click(submitButton);

    // Assert that the form submitted with score = 9 and an empty comment
    expect(handleSubmit).toHaveBeenCalledWith({
      score,         // Should match test score
      comment: "",   // Since no comment is required when score > 5
    });
  });
});
