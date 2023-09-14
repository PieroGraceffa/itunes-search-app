// Import React and useState from the 'react' library
import React, { useState } from "react";

// Define a functional component called SearchBar that takes a prop 'onSearch'
const SearchBar = ({ onSearch }) => {
  // Initialize state variables for 'query' and 'mediaType' using the useState hook
  const [query, setQuery] = useState("");
  const [mediaType, setMediaType] = useState("all");

  // Define a function to handle the search operation
  const handleSearch = () => {
    // Call the 'onSearch' function with 'query' and 'mediaType' as arguments
    onSearch(query, mediaType);
  };

  // Render the search bar with an input field, a dropdown select, and a search button
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search iTunes"
        value={query}
        // Update the 'query' state when the input value changes
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        value={mediaType}
        // Update the 'mediaType' state when the select option changes
        onChange={(e) => setMediaType(e.target.value)}>
        {/* Define various options for media types */}
        <option value="all">All</option>
        <option value="movie">Movie</option>
        <option value="podcast">Podcast</option>
        <option value="music">Music</option>
        <option value="audiobook">Audiobook</option>
        <option value="shortFilm">Short Film</option>
        <option value="tvShow">TV Show</option>
        <option value="software">Software</option>
        <option value="ebook">eBook</option>
      </select>
      {/* Add a button to trigger the search */}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

// Export the SearchBar component to make it available for use in other parts of the application
export default SearchBar;
