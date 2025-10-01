import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import GalleryMobile from './components/GalleryMobile';
import Tabs from './components/Tabs';
import PriceSection from './components/PriceSection';
import SummarySection from './components/SummarySection';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddRoom = (room) => {
    setCartItems(prevItems => {
      // Check if room already exists
      const existingItemIndex = prevItems.findIndex(item => item.id === room.id);
      
      if (existingItemIndex !== -1) {
        // If room exists, update quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        // If room doesn't exist, add new room
        return [...prevItems, room];
      }
    });
  };

  const handleRemoveRoom = (roomId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== roomId));
  };

  const handleUpdateQuantity = (roomId, newQuantity) => {
    if (newQuantity === 0) {
      handleRemoveRoom(roomId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === roomId ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  const handleToggleBreakfast = (roomId) => {
    setCartItems(prevItems => prevItems.map(item => {
      if (item.id === roomId) {
        const includeBreakfast = !item.includeBreakfast;
        const basePrice = item.price;
        const totalPrice = basePrice + (includeBreakfast ? 100 : 0);
        return { ...item, includeBreakfast, totalPrice };
      }
      return item;
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Show GalleryMobile on small screens, Gallery on md+ */}
        <div className="block md:hidden">
          <GalleryMobile />
          <Tabs />
        </div>
        <div className="hidden md:block">
          <Gallery onRoomAdd={handleAddRoom} />
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <PriceSection 
              onRoomAdd={handleAddRoom}
              cartItems={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
            />
          </div>
          <div className='mt-24'>
            <SummarySection 
              cartItems={cartItems}
              onRemoveRoom={handleRemoveRoom}
              onUpdateQuantity={handleUpdateQuantity}
              onToggleBreakfast={handleToggleBreakfast}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
