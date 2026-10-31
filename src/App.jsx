import React, { useState, useCallback, useReducer, useEffect } from 'react';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import { favoritesReducer, getInitialFavorites } from './reducers/favoritesReducer';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, dispatch] = useReducer(favoritesReducer, [], getInitialFavorites);

  // Effect to synchronize favorites with localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('celebrare_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
          <h1 className="text-3xl font-bold">Celebrare Photos</h1>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
          </div>
        </div>
      </header>
      <main className="py-8">
        <Gallery searchTerm={searchTerm} favorites={favorites} dispatch={dispatch} />
      </main>
    </div>
  );
}

export default App;
