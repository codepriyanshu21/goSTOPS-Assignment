import React from 'react';
import mainImage from '../assets/image1.webp';

const GALLERY_ROOM = {
  id: 'gallery-room',
  image: mainImage,
  title: 'Bed in 4 Bed Mixed AC Dormitory Room with Ensuite Bathroom',
  adults: 1,
  price: 517.86,
  originalPrice: 959,
  features: [
    'Laundry (Subject to Availability)',
    'Shared or Ensuite Bathroom (As per room category reserved)',
    'Air Conditioned',
    'Free Breakfast (As per rate reserved)',
    'Vehicle on Hire (Extra Charges)',
  ],
  includeBreakfast: false,
  totalPrice: 517.86,
  quantity: 1,
};

const Gallery = ({ onRoomAdd }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Large main image */}
        <div className="relative w-full md:w-2/3 rounded-lg overflow-hidden">
          <div className="absolute top-2 left-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold z-10">
            Popular among solo-travellers
          </div>
          <img
            src={mainImage}
            alt="Main Gallery"
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </div>

        {/* Smaller images grid */}
        <div className="w-full md:w-1/3 grid grid-cols-2 grid-rows-2 gap-4 relative">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="rounded-lg overflow-hidden"
            >
              <img
                src={mainImage}
                alt={`Gallery Image ${num}`}
                className="w-full h-[245px] object-cover"
              />
            </div>
          ))}

          {/* Gallery Button */}
          <div className="absolute bottom-2 right-2 bg-white bg-opacity-90 rounded-full px-3 py-1 flex items-center space-x-1 text-gray-700 text-sm shadow-md cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h3.28a1 1 0 01.948.684l.948 2.842a1 1 0 00.948.684H17a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l-3 3m0 0l-3-3m3 3V6"
              />
            </svg>
            <span>Gallery</span>
          </div>
        </div>
      </div>

      {/* Room details below all images */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white bg-opacity-95 rounded-b-lg shadow p-6 mt-6">
        {/* Details left */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-gray-800">{GALLERY_ROOM.title}</h3>
          <div className="flex items-center text-gray-600 mb-2">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <span>x {GALLERY_ROOM.adults} Adult</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            {GALLERY_ROOM.features.map((feature, idx) => (
              <span key={idx} className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-xs">{feature}</span>
            ))}
            <span className="text-gray-500 text-xs cursor-pointer">+15 more</span>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-2xl font-bold text-gray-900">₹{GALLERY_ROOM.price}</span>
            <span className="line-through text-gray-400 text-sm">₹{GALLERY_ROOM.originalPrice}/night</span>
            <span className="bg-green-200 text-green-800 px-2 py-0.5 rounded text-xs font-semibold">'GO10' Applied</span>
          </div>
        </div>
        {/* Select Room button right */}
        <div className="mt-6 md:mt-0 md:ml-8 flex-shrink-0">
          <button
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap"
            onClick={() => onRoomAdd(GALLERY_ROOM)}
          >
            Select Room
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
