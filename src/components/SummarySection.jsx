import React from 'react';

const SummarySection = ({ cartItems = [], onRemoveRoom, onUpdateQuantity, onToggleBreakfast }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.totalPrice * item.quantity), 0);
  const totalGuests = cartItems.reduce((sum, item) => sum + (item.adults * item.quantity), 0);
  return (
    <section className="max-w-md mx-auto md:mx-0 bg-white rounded-lg shadow-md p-6">
      {/* Date and guest info */}
      <div className="flex flex-col sm:flex-row justify-between mb-4 text-gray-700 text-sm space-y-2 sm:space-y-0">
        <div className="flex items-center space-x-2">
          {/* Calendar icon placeholder */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>29 Oct - 30 Oct (1 night)</span>
        </div>
        <div className="flex items-center space-x-2">
          {/* Guests icon placeholder */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 12a4 4 0 100-8 4 4 0 000 8z" />
          </svg>
          <span>{totalGuests} guests</span>
        </div>
      </div>

      {/* Summary box */}
      <div className="border border-gray-300 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-center">Summary</h3>
        {cartItems.length === 0 ? (
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mb-4 h-16 w-16 text-pink-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-600 text-sm">
              Select a bed to get your stay summary here.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-medium text-gray-800 flex-1 pr-2">
                    {item.title}
                  </h4>
                  <button
                    onClick={() => onRemoveRoom(item.id)}
                    className="text-red-500 hover:text-red-700 text-xs"
                  >
                    ✕
                  </button>
                </div>
                <div className="text-xs text-gray-600 mb-2">
                  <p>👤 {item.adults} Adult(s)</p>
                  <label className="flex items-center mt-1">
                    <input
                      type="checkbox"
                      checked={item.includeBreakfast}
                      onChange={() => onToggleBreakfast(item.id)}
                      className="mr-2"
                    />
                    <span className={item.includeBreakfast ? "text-green-600" : "text-gray-600"}>
                      {item.includeBreakfast ? '✓ Breakfast included' : 'Include Breakfast'}
                    </span>
                  </label>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 flex items-center justify-center text-xs"
                    >
                      -
                    </button>
                    <span className="text-sm font-medium">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 flex items-center justify-center text-xs"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-800">
                      ₹{(item.totalPrice * item.quantity).toFixed(2)}
                    </p>
                    {item.quantity > 1 && (
                      <p className="text-xs text-gray-500">
                        ₹{item.totalPrice}/bed
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {/* Total */}
            <div className="pt-4 border-t border-gray-300">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-800">Total:</span>
                <span className="text-xl font-bold text-pink-600">₹{totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">For 1 night</p>
            </div>
            {/* Proceed button */}
            <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-medium mt-4">
              Proceed to Book
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SummarySection;
