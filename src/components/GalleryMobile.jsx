import React from 'react';
import mainImage from '../assets/image1.webp';

const GalleryMobile = () => {
  return (
    <section className="md:hidden max-w-md mx-auto px-4 py-8">
      {/* Main gallery image */}
      <div className="rounded-lg overflow-hidden bg-gray-300 h-64 mb-4 relative">
        <img
          src={mainImage}
          alt="Main Gallery"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute top-2 left-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
          Popular among solo-travellers
        </div>
        {/* Pagination indicator */}
        <div className="absolute bottom-2 right-2 bg-white bg-opacity-90 rounded-full px-3 py-1 flex items-center space-x-1 text-gray-700 text-sm shadow-md cursor-pointer">
          <span>1/5</span>
        </div>
      </div>

      {/* Hostel info card */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h3 className="font-bold text-lg mb-1">bengalurusb-hostel</h3>
        <p className="text-gray-600 mb-2 cursor-pointer underline">View location</p>
        <div className="flex flex-wrap gap-4 text-purple-700 text-sm">
          <span className="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 12a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
            <span>Booked by 500+ this week</span>
          </span>
          <span className="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h4" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v2a4 4 0 004 4h4" />
            </svg>
            <span>Near to Majestic Bus Station.</span>
          </span>
        </div>
      </div>

      {/* Smaller images grid */}
      <div className="grid grid-cols-2 gap-4 rounded-lg overflow-hidden">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="bg-gray-300 h-36 rounded-lg overflow-hidden">
            <img
              src={mainImage}
              alt={`Gallery Image ${num}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryMobile;
