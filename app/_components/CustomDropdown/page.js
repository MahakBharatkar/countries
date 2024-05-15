import { useState } from "react";

const REGIONS = ["Americas", "Africa", "Oceania", "Europe", "Asia"];

const CustomDropdown = () => {

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      <button
        id="dropdownBgHoverButton"
        data-dropdown-toggle="dropdownBgHover"
        className="text-white dark:bg-slate-800 dark:hover:bg-slat-700 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center bg-white hover:bg-slate-100 mt-4 ml-4"
        type="button"
        onClick={()=>setShowDropdown(!showDropdown)}
      >
        Region{" "}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdownBgHover"
        className={`z-10 w-48 ${showDropdown?"show":"hidden"} bg-white shadow dark:bg-gray-700 z-1000 ml-4`}
      >
        <ul
          className="p-3 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownBgHoverButton"
        >
          {REGIONS.map((region) => {
            return (
              <li key={region}>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id="checkbox-item"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  ></input>
                  <label
                    htmlFor="checkbox-item"
                    className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                    {region}
                  </label>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CustomDropdown;
