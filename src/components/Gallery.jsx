import React, { useMemo } from 'react';
import useFetchPhotos from '../hooks/useFetchPhotos';
import Loader from './Loader';
import PhotoCard from './PhotoCard';

const Gallery = ({ searchTerm, favorites, dispatch }) => {
  const { photos, loading, error } = useFetchPhotos();

  const filteredPhotos = useMemo(() => {
    if (!searchTerm) {
      return photos;
    }
    const lowercasedSearchTerm = searchTerm.toLowerCase().trim();
    return photos.filter(photo => 
      photo.author.toLowerCase().includes(lowercasedSearchTerm)
    );
  }, [photos, searchTerm]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto my-16 p-6 bg-[#FFFFFF] border border-[#E7E3DA] rounded-md text-center shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F5F3EE] text-[#C87568] mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <p className="text-base font-medium text-[#292B28]">{error}</p>
        <p className="text-sm text-[#77766F] mt-1.5">
          Please check your network connection and reload the page.
        </p>
      </div>
    );
  }

  return (
    <section aria-label="Photo Gallery Collection">
      {/* Editorial gallery intro header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-4 mb-7 border-b border-[#E7E3DA] gap-1">
        <h2 className="text-xl sm:text-2xl font-editorial-serif font-normal text-[#292B28] tracking-tight">
          Selected photographs
        </h2>
        <span className="text-xs tracking-wider uppercase font-medium text-[#77766F]">
          {searchTerm.trim()
            ? `${filteredPhotos.length} of ${photos.length} photographs`
            : `${photos.length} photographs`}
        </span>
      </div>

      {filteredPhotos.length === 0 ? (
        <div className="py-20 text-center max-w-sm mx-auto">
          <p className="text-base font-editorial-serif text-[#292B28]">
            No photographs found
          </p>
          <p className="text-sm text-[#77766F] mt-1.5">
            No results matching &ldquo;{searchTerm}&rdquo;. Try another author name or clear your search query.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredPhotos.map(photo => (
            <PhotoCard 
              key={photo.id} 
              photo={photo} 
              favorites={favorites} 
              dispatch={dispatch} 
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Gallery;
