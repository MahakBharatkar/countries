import React from "react";

const Header = ({ darkMode, setDarkMode }) => {
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="h-[80px] flex justify-between bg-white dark:bg-slate-800">
      <div className="text-[14px] md:text-[24px] font-[800] text-left leading-[32.74px] ml-4 md:ml-20  mt-6 dark:text-white">
        Where in the world?
      </div>
      <button
        className={`text-[12px] font-[600] h-10 mt-4 mr-20 ${
          darkMode ? "text-white" : "text-black"
        }`}
        onClick={toggleMode}
      >
        {darkMode ? "Dark mode" : "Light mode"}
      </button>
    </div>
  );
};

export default Header;
