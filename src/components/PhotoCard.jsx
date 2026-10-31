import React from 'react';

const PhotoCard = ({ photo, favorites, dispatch }) => {
  const isFavorite = favorites.some(fav => fav.id === photo.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: { id: photo.id } });
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: photo });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 ease-in-out hover:scale-105">
      <img 
        src={photo.download_url}
        alt={`Photo by ${photo.author}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">{photo.author}</h3>
        <button
          onClick={toggleFavorite}
          className="transition-colors duration-200 focus:outline-none"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}`}
            fill={isFavorite ? 'currentColor' : 'none'}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;
