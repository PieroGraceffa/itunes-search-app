// Import necessary testing utilities from '@testing-library/react'
import { render, screen } from "@testing-library/react";

// Import the 'App' component that you want to test
import App from "./App";

// Define a test case: "renders main heading"
test("renders main heading", () => {
  // Render the 'App' component
  render(<App />);

  // Find the main heading element with the specified text
  const headingElement = screen.getByText("Piero's iTunes Search App"); // Updated to match the actual heading text

  // Check if the heading element is present in the rendered output
  expect(headingElement).toBeInTheDocument(); // Expect the heading to be in the document
});
