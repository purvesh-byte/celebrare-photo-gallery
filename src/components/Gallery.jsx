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
      <div className="text-center py-10">
        <p className="text-red-600 text-lg font-semibold">Error: {error}</p>
        <p className="text-gray-500 mt-2">Please check your internet connection or try again later.</p>
      </div>
    );
  }

  if (filteredPhotos.length === 0 && !loading && !error) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-600 text-lg font-semibold">No photos found matching "{searchTerm}".</p>
        <p className="text-gray-500 mt-2">Try a different author name or clear your search.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-8">Our Photo Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPhotos.map(photo => (
          <PhotoCard key={photo.id} photo={photo} favorites={favorites} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
