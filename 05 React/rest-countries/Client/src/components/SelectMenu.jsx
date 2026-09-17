import React from 'react'

export default function SelectMenu({setselectRegion}) {
   const select=(e)=>{
      setselectRegion(e.target.value)
   }
  return (
    <select className="filter-by-region" onChange={select}>
      <option hidden="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}