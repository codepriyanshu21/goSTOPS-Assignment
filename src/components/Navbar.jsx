import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-400 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center  cursor-pointer select-none">
        {/* Optional: SVG hand/spiral mark */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 72 72"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="28" cy="44" r="18" fill="#FFD400" />
          <path
            d="M34.5 44c0-3.59-2.91-6.5-6.5-6.5S21.5 40.41 21.5 44"
            fill="none"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M29 44c0-6-4.5-10-10-10s-10 4-10 10"
            fill="none"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <rect
            x="4"
            y="10"
            width="9"
            height="40"
            rx="4.5"
            transform="rotate(-45 4 10)"
            fill="#5B4FD6"
          />
          <rect
            x="2"
            y="8"
            width="9"
            height="40"
            rx="4.5"
            transform="rotate(-25 2 8)"
            fill="#00D6E0"
          />
          <rect
            x="6"
            y="6"
            width="9"
            height="40"
            rx="4.5"
            transform="rotate(5 6 6)"
            fill="#FF227D"
          />
          <rect
            x="18"
            y="2"
            width="9"
            height="40"
            rx="4.5"
            transform="rotate(20 18 2)"
            fill="#FF7F10"
          />
          <rect
            x="8"
            y="2"
            width="9"
            height="40"
            rx="4.5"
            transform="rotate(-5 8 2)"
            fill="#3C9EF5"
          />
        </svg>

        {/* Colored goSTOPS Text */}
        <div className="font-extrabold text-2xl md:text-3xl tracking-tight">
          <span style={{ color: "#FFD400" }}>go</span>
          <span style={{ color: "#2FD7C8" }}>S</span>
          <span style={{ color: "#22D9FF" }}>T</span>
          <span style={{ color: "#5B4FD6" }}>O</span>
          <span style={{ color: "#FF2B86" }}>P</span>
          <span style={{ color: "#FF7F10" }}>S</span>
        </div>
      </div>

      {/* Nav Links */}
      <ul className="flex space-x-6">
        <li className="hover:text-yellow-300 cursor-pointer">Destinations</li>
        <li className="hover:text-yellow-300 cursor-pointer">Workation</li>
        <li className="hover:text-yellow-300 cursor-pointer">Coliving</li>
        <li className="hover:text-yellow-300 cursor-pointer">Business</li>
        <li className="hover:text-yellow-300 cursor-pointer">Collaborate</li>
      </ul>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="bg-white text-gray-800 px-4 py-1 rounded-2xl shadow hover:bg-gray-200">
          Download App
        </button>
        <button className="bg-pink-500 px-4 py-1 rounded-2xl shadow hover:bg-pink-600">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
