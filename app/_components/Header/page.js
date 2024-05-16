import React from "react";

const Header = ({ darkMode, setDarkMode }) => {
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="h-[80px] flex justify-between bg-white dark:bg-slate-800 items-center">
      <div className="text-[14px] md:text-[24px] font-[800] text-left leading-[32.74px] ml-4 md:ml-20  mt-6 dark:text-white">
        Where in the world?
      </div>
      <button
        className={`text-[12px] font-[600] h-10 mt-4 flex mr-10 w-20 text-nowrap ${
          darkMode ? "text-white" : "text-black"
        }`}
        onClick={toggleMode}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="moon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
        <span>
        {darkMode ? "Dark mode" : "Light mode"}
        </span>
        
      </button>
    </div>
  );
};

export default Header;
