// Import React from the 'react' library
import React from "react";

// Define a functional component called SearchResults that takes two props: 'results' and 'onAddToFavorites'
const SearchResults = ({ results, onAddToFavorites }) => {
  return (
    <div className="search-results">
      {/* Map over the 'results' array and render each search result item */}
      {results.map((item) => (
        <div key={item.trackId} className="result-item">
          {/* Display the artwork of the search result item */}
          <img src={item.artworkUrl100} alt={item.trackName} />
          {/* Display the name of the search result item */}
          <h3>{item.trackName}</h3>
          {/* Display the artist's name */}
          <p>Artist: {item.artistName}</p>
          {/* Display the primary genre of the search result item */}
          <p>Genre: {item.primaryGenreName}</p>
          {/* Add a button to add the item to favorites */}
          <button onClick={() => onAddToFavorites(item)}>
            Add to Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

// Export the SearchResults component to make it available for use in other parts of the application
export default SearchResults;
