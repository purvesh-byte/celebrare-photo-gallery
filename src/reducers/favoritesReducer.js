const getInitialFavorites = () => {
  try {
    const storedFavorites = localStorage.getItem('celebrare_favorites');
    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites);
      // Basic validation: ensure it's an array and contains objects with an 'id'
      if (Array.isArray(parsedFavorites) && parsedFavorites.every(item => typeof item === 'object' && item !== null && 'id' in item)) {
        return parsedFavorites;
      }
      console.warn("Invalid favorites data in localStorage. Resetting favorites.");
      return [];
    }
  } catch (error) {
    console.error("Error parsing favorites from localStorage:", error);
  }
  return [];
};

export const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      // Prevent duplicates by checking if the photo is already in favorites
      if (!state.some(fav => fav.id === action.payload.id)) {
        return [...state, action.payload];
      }
      return state;
    case 'REMOVE_FAVORITE':
      return state.filter(fav => fav.id !== action.payload.id);
    default:
      return state;
  }
};

export { getInitialFavorites };
