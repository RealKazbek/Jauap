// Header.jsx
import React, { useState } from "react";
import Search from "./Search";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);

  return (
    <header className="flex justify-between items-center rounded-xl px-5 py-6 bg-grey-900 shadow-[0_4px_20px_0_rgba(7,6,18,0.1)]">
      {/* Left side */}
      <div className="flex items-center gap-7">
        {/* Burger Menu */}
        <button
          className="w-10 h-10 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="block w-6 h-0.5 rounded-xl bg-grey-700" />
            ))}
          </div>
        </button>

        <Search />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3.5 text-gray-400 text-sm">
        <button onClick={() => setIsAvailable(!isAvailable)}>Account</button>
        {isAvailable && (
          <button onClick={() => setHasNotification(!hasNotification)}>
            Notification
          </button>
        )}

        {/* Language Switcher */}
        <div className="flex items-center gap-1 px-2 py-1 cursor-pointer hover:text-white transition ease-in duration-300">
          <img src="src/assets/Flags/GB.svg" alt="Language" className="mr-1" />
          <span>English</span>
          <img src="src/assets/arrow.svg" alt="Arrow" />
        </div>

        {/* Apps */}
        {isAvailable && (
          <div className="grid grid-cols-2 gap-0.5 cursor-pointer">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-gray-700 rounded-full"
              />
            ))}
          </div>
        )}

        {/* Notification */}
        {isAvailable && (
          <div className="relative flex justify-center items-center cursor-pointer">
            <img className="w-6" src="src/assets/notification.svg" alt="Notification" />
            {hasNotification && (
              <span className="absolute top-[1px] right-[1px] h-3 w-3 bg-grey-900 flex justify-center items-center rounded-full">
                <span className="block h-2 w-2 rounded-full bg-notification-red" />
              </span>
            )}
          </div>
        )}

        {/* Profile / Sign Up */}
        {isAvailable ? (
          <img
            className="w-10 h-10 rounded-full border border-black cursor-pointer"
            src="src/assets/profile.png"
            alt="Profile"
          />
        ) : (
          <a
            className="cursor-pointer hover:text-white transition ease-in duration-300"
            href="auth"
          >
            Sign Up
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;