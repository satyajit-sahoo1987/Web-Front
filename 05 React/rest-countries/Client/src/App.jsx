import React, { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import SelectMenu from './components/SelectMenu'
import CountriesList from './components/CountriesList'
import './App.css'
import { Outlet } from 'react-router'
const App = () => {
  return (
    <>
     <Header/>
     <Outlet/>
    </>
  )
}

export default App