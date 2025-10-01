import  { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Rooms');

  const tabs = ['Rooms', 'Amenities', 'Location', 'Guidelines'];

  return (
    <div className="max-w-md mx-auto md:hidden mb-6 bg-white rounded-lg shadow p-2 flex justify-around text-sm font-medium text-gray-600">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-3 py-2 rounded-lg focus:outline-none ${
            activeTab === tab ? 'bg-pink-500 text-white' : 'hover:bg-gray-100'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
