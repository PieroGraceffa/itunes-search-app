// Import React from the 'react' library
import React from "react";

// Define a functional component called Favorites that takes two props: 'favorites' and 'onRemoveFromFavorites'
const Favorites = ({ favorites, onRemoveFromFavorites }) => {
  return (
    <div className="favorites">
      {/* Map over the 'favorites' array and render each favorite item */}
      {favorites.map((item) => (
        <div key={item.trackId} className="favorite-item">
          {/* Display the artwork of the favorite item */}
          <img src={item.artworkUrl100} alt={item.trackName} />
          {/* Display the name of the favorite item */}
          <h3>{item.trackName}</h3>
          {/* Display the artist's name */}
          <p>Artist: {item.artistName}</p>
          {/* Display the primary genre of the favorite item */}
          <p>Genre: {item.primaryGenreName}</p>
          {/* Add a button to remove the item from favorites */}
          <button onClick={() => onRemoveFromFavorites(item)}>
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

// Export the Favorites component to make it available for use in other parts of the application
export default Favorites;
