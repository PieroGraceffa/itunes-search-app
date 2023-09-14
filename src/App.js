// Import the necessary libraries and components for the React application
// Import React and useState from the 'react' library
import React, { useState } from "react";
// Import a CSS file for styling the main application
import "./App.css";

// Import custom components from their respective files
import SearchBar from "./components/SearchBar"; // Import the SearchBar component
import SearchResults from "./components/SearchResults"; // Import the SearchResults component
import Favorites from "./components/Favorites"; // Import the Favorites component

function App() {
  // Initialize state variables using useState hook
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [duplicateNotification, setDuplicateNotification] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Function to handle the search process
  const handleSearch = (query, mediaType) => {
    setIsSearching(true);

    // Construct the iTunes API URL with the provided search query and media type
    const apiUrl = `https://itunes.apple.com/search?term=${query}&media=${mediaType}`;

    // Fetch data from the iTunes API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results || []); // Set search results
        setDuplicateNotification(""); // Clear any duplicate item notification

        setIsSearching(false); // Finish the search process
      })
      .catch((error) => {
        console.error(error);
        setSearchResults([]); // Clear search results in case of an error
        setIsSearching(false); // Finish the search process
      });
  };

  // Function to add an item to the favorites list
  const addToFavorites = (item) => {
    if (!favorites.some((fav) => fav.trackId === item.trackId)) {
      // Check if the item is not already in favorites
      setFavorites([...favorites, item]); // Add the item to favorites
    } else {
      setDuplicateNotification("This item is already in your favorites."); // Show duplicate notification
      setTimeout(() => {
        setDuplicateNotification("");
      }, 2000); // Clear the duplicate notification after 2 seconds
    }
  };

  // Function to remove an item from the favorites list
  const removeFromFavorites = (itemToRemove) => {
    const updatedFavorites = favorites.filter(
      (item) => item.trackId !== itemToRemove.trackId
    );
    setFavorites(updatedFavorites); // Update the favorites list by removing the specified item
  };

  return (
    <div className="App">
      <h1>Piero's iTunes Search App</h1>
      <SearchBar onSearch={handleSearch} />{" "}
      {/* Render the search bar component */}
      <button onClick={() => setShowFavorites(!showFavorites)}>
        {/* Toggle between showing search results and favorites */}
        {showFavorites ? "Back to Search" : "Show Favorites"}
      </button>
      <div className="content">
        {duplicateNotification && (
          <p className="notification">{duplicateNotification}</p>
        )}
        {isSearching ? (
          <p>iTunes is Searching...</p> // Display a loading message during the search
        ) : !showFavorites ? (
          <SearchResults
            results={searchResults}
            onAddToFavorites={addToFavorites}
          /> // Display search results
        ) : (
          <div className="favorites">
            <Favorites
              favorites={favorites}
              onRemoveFromFavorites={removeFromFavorites}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
