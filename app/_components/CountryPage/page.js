import formatCurrencies from '@/app/_utils/formatCurrencies'
import formatLanguages from '@/app/_utils/formatLanguages'
import React from 'react'
import KeyValueText from '../KeyValueText/page';

const CountryPage = ({selectedCountry, setSelectedCountry}) => {

    const {languages, currencies} = selectedCountry;

  return (
    <div className="ml-4 md:ml-20">
    <button
      className="px-4 py-2 rounded bg-white dark:bg-slate-800 text-[14px] font-[300] text-black dark:text-white mt-6 md:mb-20 mb-4"
      onClick={() => setSelectedCountry({})}
    >
      {"<--  Back"}
    </button>


    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 dark:text-white">
      <div className="md:row-span-3">
        <img className="rounded"
          src={selectedCountry?.flags?.svg}
          alt={selectedCountry?.flags?.alt} 
          width={300}
          height={200}
          
        ></img>
      </div>

      <div className="md:row-span-2">
        <div className="font-[800] text-lg mb-4 ml-3">
          {selectedCountry.name?.common}
        </div>
        <div>
          <KeyValueText
            label={"Native Name"}
            value={Object.keys(selectedCountry.name?.nativeName)[0]?.common}
          ></KeyValueText>

          <KeyValueText
            label={"Region"}
            value={selectedCountry.region}
          ></KeyValueText>

          <KeyValueText
            label={"Sub region"}
            value={selectedCountry.subregion}
          ></KeyValueText>

          <KeyValueText
            label={"Capital"}
            value={selectedCountry.capital[0]}
          ></KeyValueText>
        </div>
      </div>

      <div className="md:row-span-2 md:mt-10">
        <KeyValueText
          label={"Top Level Domain"}
          value={selectedCountry.tld?.[0]}
        ></KeyValueText>

        <KeyValueText
          label={"Currencies"}
          value={formatCurrencies(currencies)}
        ></KeyValueText>

        <KeyValueText
          label={"Languages"}
          value={formatLanguages(languages)}
        ></KeyValueText>
      </div>

      <div className="md:col-span-2 md:col-start-2 md:row-start-3 md:pl-3">
        <span className="font-semibold text-sm">Border Countries:</span>
        {selectedCountry.borders.map((neighbour)=>{
          return(
            <span key={neighbour} className="px-4 py-2  bg-white dark:bg-slate-800 text-[14px] font-[300] text-black dark:text-white mx-2">{neighbour}</span>
          )
        })}
      </div>
    </div>
    
  </div>
  )
}

export default CountryPage