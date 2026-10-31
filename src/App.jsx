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
    <div className="min-h-screen bg-[#F5F3EE] text-[#292B28] flex flex-col">
      <header className="border-b border-[#E7E3DA] bg-[#FBFAF7] sticky top-0 z-30 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div>
              <span className="block text-[11px] font-semibold tracking-[0.22em] uppercase text-[#75866A]">
                CELEBRARE / PHOTO JOURNAL
              </span>
              <h1 className="text-3xl sm:text-4xl font-normal font-editorial-serif tracking-tight text-[#292B28] mt-1">
                Photo Gallery
              </h1>
              <p className="mt-1 text-sm text-[#77766F]">
                A collection of moments, places, and perspectives.
              </p>
            </div>
            <div className="w-full md:w-80 flex-shrink-0">
              <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex-grow">
        <Gallery searchTerm={searchTerm} favorites={favorites} dispatch={dispatch} />
      </main>

      <footer className="border-t border-[#E7E3DA] bg-[#FBFAF7] py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[#77766F]">
          <span>Celebrare Frontend Internship Assignment</span>
          <span>Curated Photography • Powered by Picsum API</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
