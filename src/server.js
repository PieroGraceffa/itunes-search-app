// Import necessary modules
// Import the Express framework
const express = require("express");
// Import Cross-Origin Resource Sharing middleware
const cors = require("cors");
// Import Helmet middleware for security headers
const helmet = require("helmet");
// Import the 'node-fetch' library for making HTTP requests
const fetch = require("node-fetch");

// Create an Express application
const app = express();

// Define the port to listen on, using the environment variable if available, or default to 5000
const port = process.env.PORT || 5000;

// Use the CORS middleware to handle Cross-Origin Resource Sharing
app.use(cors());

// Use the Helmet middleware to set various security-related HTTP headers
app.use(helmet());

// Define a route for handling GET requests to "/api/search"
app.get("/api/search", (req, res) => {
  // Extract the 'term' and 'mediaType' query parameters from the request
  const { term, mediaType } = req.query;

  // Check if 'term' or 'mediaType' is missing; return a 400 Bad Request response if either is missing
  if (!term || !mediaType) {
    return res
      .status(400)
      .json({ error: "Search term and media type are required." });
  }

  // Construct the iTunes API URL with the provided search term and media type
  const apiUrl = `https://itunes.apple.com/search?term=${term}&media=${mediaType}`;

  // Use the 'node-fetch' library to make an HTTP GET request to the iTunes API
  fetch(apiUrl)
    .then((response) => response.json()) // Parse the JSON response
    .then((data) => {
      // Send the JSON response from the iTunes API to the client
      res.json(data);
    })
    .catch((error) => {
      // Handle errors by logging them and sending a 500 Internal Server Error response
      console.error(error);
      res.status(500).json({ error: "Internal server error." });
    });
});

// Start the Express server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
