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
    <article className="group bg-[#FFFFFF] border border-[#E7E3DA] rounded-md overflow-hidden transition-all duration-300 hover:border-[#75866A]/40 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex flex-col">
      <div className="aspect-[4/3] w-full overflow-hidden bg-[#E7E3DA]/40 relative">
        <img 
          src={photo.download_url}
          alt={`Photograph by ${photo.author}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="p-3.5 sm:p-4 flex justify-between items-center bg-[#FFFFFF]">
        <div className="min-w-0 pr-3">
          <span className="block text-[10px] tracking-widest uppercase font-medium text-[#77766F]">
            Photographer
          </span>
          <p className="text-sm font-medium text-[#292B28] truncate mt-0.5">
            {photo.author}
          </p>
        </div>
        <button
          onClick={toggleFavorite}
          className="p-1.5 rounded-full text-[#77766F] hover:text-[#C87568] hover:bg-[#F5F3EE] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#75866A] flex-shrink-0"
          aria-label={isFavorite ? `Remove photo by ${photo.author} from favorites` : `Add photo by ${photo.author} to favorites`}
          title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transition-transform duration-200 group-hover/heart:scale-110"
            fill={isFavorite ? '#C87568' : 'none'}
            viewBox="0 0 24 24"
            stroke={isFavorite ? '#C87568' : 'currentColor'}
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default PhotoCard;
