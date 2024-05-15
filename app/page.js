"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./_components/Header/page";
import Card from "./_components/Card/page";
import CustomDropdown from "./_components/CustomDropdown/page";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRegions, setFilterRegions] = useState([]);

  // console.log("countries", countries);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://restcountries.com/v3.1/all?fields=borders,capital,currencies,flags,languages,name,population,region,subregion,tld"
      );
      setCountries(response?.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery)
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={`${darkMode && "dark"} h-full`}>
      <div className="bg-slate-100 dark:bg-slate-900">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <input type="text" onChange={handleSearch} placeholder="Search by country ..." className="w-[343px] md:w-[480px] bg-white dark:bg-slate-800 drop-shadow-md ml-4 md:ml-24 mt-10 h-[56px] md:h-[40px] focus:outline-none p-2" />

        <CustomDropdown/>

        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          {filteredCountries.map((country) => {
            return <Card item={country} key={country.name.common} />;
          })}
        </div>
      </div>
    </div>
  );
}
