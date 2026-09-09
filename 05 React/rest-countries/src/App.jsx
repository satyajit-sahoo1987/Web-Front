import React, { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import SelectMenu from './components/SelectMenu'
import CountriesList from './components/CountriesList'
import './App.css'
const App = () => {
  const[query,setQuery]=useState("")
  const[selectRegion,setselectRegion]=useState("")
  return (
    <>
    <Header/>
    <main>
        <div className="search-filter-container">
            <SearchBar setQuery={setQuery}/>
            <SelectMenu  setselectRegion={setselectRegion}/>
        </div>
        <CountriesList query={query} selectRegion={selectRegion}/>
    </main>
    </>
  )
}

export default App