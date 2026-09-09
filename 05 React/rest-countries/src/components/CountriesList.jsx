import countriesData from "../countriesData";
import CountryCard from "./CountryCard";
import {useState} from 'react';
export default function CountriesList({query ,selectRegion}) {
  // const[query,setQuery]=useState("")
  const filteredCountries=countriesData.filter(country=>country.name.common.toLowerCase() .includes(query.toLowerCase())
&& (selectRegion===""||country.region.toLowerCase()===selectRegion.toLowerCase())
);
  
  // const handleChange=(e)=>{
    // console.log(e.target.value)
      // setQuery(e.target.value)
    // }
  
    
  return (
   <>
   {/* <input type="text" name="search" onChange={handleChange}/> */}
    <div className="countries-container">

      {
        // countriesData.map((country,idx)=>(
          filteredCountries.length!=0?
        (filteredCountries.map((country,idx)=>(

          <CountryCard
          key={idx} 
          flag={country.flags.svg}
          name={country.name.common}
          population={country.population}
          capital={country.capital}
          region={country.region}
          />)
        ))
        :
      <p>Unable to find Country with name:-{query}</p>
      }

    

    </div>
   </>
  )
}
