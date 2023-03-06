import React from 'react'
import './Header.css'
import { BsSearch } from 'react-icons/bs'

function Searchh({ val, setVal, regionsRef, changeRegions, count, setCount }) {
  const sear = e => {
    setVal(e.target.value)
    e.target.value ? setCount(10000) : setCount(12)
  }
  return (
    <div className='search py-4'>
      <div className="input-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="search-div">
            <div className="search-icon">
              <a href="#"><BsSearch /></a>
            </div>
            <input type="search" id="search" className='mySearch' placeholder='Search' autoComplete='true' value={val} onChange={sear} />
          </div>
        </form>
      </div>
      <div className="filter-by-region">

        <select id="Reagions" ref={regionsRef} onChange={changeRegions}>
          <option value="">All</option>
          <option value="africa">Africa</option>
          <option value="america">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="ocenia">Ocenia</option>
          <option value="polar">Polar</option>
        </select>
      </div>

    </div>
  )
}

export default Searchh