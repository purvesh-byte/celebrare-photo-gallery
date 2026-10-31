import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center py-28" role="status" aria-live="polite">
      <div className="relative">
        <div className="h-9 w-9 rounded-full border-2 border-[#E7E3DA]" />
        <div className="h-9 w-9 rounded-full border-2 border-transparent border-t-[#75866A] animate-spin absolute top-0 left-0" />
      </div>
      <p className="mt-4 text-xs font-medium tracking-[0.18em] uppercase text-[#77766F]">
        Loading photographs...
      </p>
    </div>
  );
};

export default Loader;
