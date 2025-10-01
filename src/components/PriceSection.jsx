import React from 'react';
import room1 from '../assets/room1.jpg';
import room2 from '../assets/room2.jpg';


const rooms = [
  {
    id: 1,
    image: room1,
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
  },
  {
    id: 2,
    image: room2,
    title: 'Bed in 6 Bed Mixed AC Dormitory Room with Ensuite Bathroom',
    adults: 1,
    price: 417.86,
    originalPrice: 759,
    features: [
      'Laundry (Subject to Availability)',
      'Shared or Ensuite Bathroom (As per room category reserved)',
      'Air Conditioned',
      'Free Breakfast (As per rate reserved)',
      'Vehicle on Hire (Extra Charges)',
    ],
  },
  
];


const BREAKFAST_PRICE = 100;

const PriceSection = ({ onRoomAdd, cartItems }) => {
  const [breakfastChoices, setBreakfastChoices] = React.useState({});

  const handleBreakfastChange = (roomId, checked) => {
    setBreakfastChoices(prev => ({ ...prev, [roomId]: checked }));
  };

  const handleAdd = (room) => {
    const includeBreakfast = !!breakfastChoices[room.id];
    const totalPrice = room.price + (includeBreakfast ? BREAKFAST_PRICE : 0);
    onRoomAdd({
      ...room,
      includeBreakfast,
      totalPrice,
      quantity: 1,
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Room types & Pricing</h2>

      {rooms.map((room) => (
        <div
          key={room.id}
          className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-4 mb-6 gap-4"
        >
          {/* Room image */}
          <div className="w-full md:w-1/3 rounded-lg overflow-hidden bg-gray-300 h-48">
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Room details */}
          <div className="w-full md:w-2/3 md:pl-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold">{room.title}</h3>
              <p className="text-gray-600 mt-1 flex items-center space-x-2">
                <span>👤 x {room.adults} Adult</span>
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {room.features.map((feature, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-xs"
                  >
                    {feature}
                  </span>
                ))}
                <span className="text-gray-500 text-xs cursor-pointer">+15 more</span>
              </div>
              <div className="mt-3 flex items-center">
                <input
                  type="checkbox"
                  id={`breakfast-${room.id}`}
                  checked={!!breakfastChoices[room.id]}
                  onChange={e => handleBreakfastChange(room.id, e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor={`breakfast-${room.id}`} className="text-sm text-gray-700">
                  Include Breakfast (+₹{BREAKFAST_PRICE})
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 gap-4">
              <div>
                <p className="text-xl font-bold">
                  ₹{room.price + (breakfastChoices[room.id] ? BREAKFAST_PRICE : 0)}
                </p>
                <p className="line-through text-gray-400 text-sm">
                  ₹{room.originalPrice}/night
                </p>
                <span className="bg-green-200 text-green-800 px-2 py-0.5 rounded text-xs font-semibold">
                  'GO10' Applied
                </span>
              </div>
              <button
                className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 whitespace-nowrap"
                onClick={() => handleAdd(room)}
              >
                Add Bed
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PriceSection;
