import countriesData from "../countriesData";
import CountryCard from "./CountryCard";
import {useEffect, useState} from 'react';
export default function CountriesList({query ,selectRegion}) {
  const[countriesData,setCountriesData]=useState([])
  // const[query,setQuery]=useState("")
  const filteredCountries=countriesData.filter(country=>country.names.common.toLowerCase() .includes(query.toLowerCase())
&& (selectRegion===""||country.region.toLowerCase()===selectRegion.toLowerCase())
);
  
useEffect(()=>{
  fetch(
  'https://api.restcountries.com/countries/v5?response_fields=names.common,capitals,flag.url_svg,region,population&limit=100',
  {
     headers: { 'Authorization': 'Bearer rc_live_3723a4758d154e1882ff8b3e79ec1ea2'

      } }
)
.then((response)=>response.json())
.then((result)=>{
console.log("result is",result)
  setCountriesData(result.data.objects)
})
},[])
console.log("//////",countriesData)
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
          flag={country.flag.url_svg || "www.go0gle.com"}
          name={country.names.common}
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
