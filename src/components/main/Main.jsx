import React, { useEffect, useRef, useState } from 'react'
import './Main.css'

import { nanoid } from 'nanoid';
import Countries from './Countries';
import axios from 'axios';
import Searchh from '../header/Searchh';

function Main({ countries, setCountries, val, setVal }) {
  const [count, setCount] = useState(12)
  const regionsRef = useRef()
  const [regions, setRegions] = useState("")
  const [loading, setLoading] = useState(true);
  const [spingLoading, setSpingLoading] = useState(true);
  const changeRegions = () => {
    setRegions(regionsRef.current.value)
  }
  useEffect(() => {
    axios.get("https://restcountries.com/v2/all")
      .then(response => setCountries(response.data));
    setLoading(false)
  }, []);
  if (loading) {
    return <h2 style={{ textAlign: "center" }}>loading...</h2>
  }
  const changeCount = () => {
    setTimeout(() => {
      setCount(count + 100)
      setSpingLoading(true)
    }, 2000);
    setSpingLoading(false)
  }

  return (
    <div className='container'>
      <Searchh countries={countries} setCountries={setCountries} val={val} setVal={setVal} regionsRef={regionsRef} changeRegions={changeRegions} count={count} setCount={setCount} />
      <div className='main d-flex flex-wrap gap-4 justify-content-between'>
        {
          countries.slice(15, 15 + count).filter((c => c.name.toLowerCase().startsWith(val.toLowerCase()) && c.region.toLowerCase().startsWith(regions.toLowerCase())))
            .map(country => <Countries key={nanoid()} {...country} />)
        }
      </div>
      <div className='loadMore d-flex justify-content-center py-3'>
        {
          countries.length >= count && <button className='btn btn-primary' onClick={changeCount}>{spingLoading ? "Load more" : "loading..."} </button>
        }

      </div>
    </div>
  )
}

export default Main
