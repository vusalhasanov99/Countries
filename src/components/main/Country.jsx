import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom';

function Country() {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    let name = window.location.pathname;
    axios.get(`https://restcountries.com/v2/name/${name}?fullText=true`)
      .then(response => setCountry(response.data[0]));
  }, []);

  return (
    <div className='container py-5'>
      <Link to="/">
        <button className='btn btn-outline-primary'><i class="fa-solid fa-arrow-left-long"></i>Back</button>
      </Link>
      <div className='countries d-flex justify-content-center'>
        <div className="card-group" style={{ width: "400px" }} >
          <div className="card" >
            <img className="card-img-top" src={country.flag} style={{ height: "50%", width: "100%" }} alt={country.name} />
            <div className="card-body" style={{ color: "blue" }}>
              <h4 className="card-title">{country.name}</h4>
              <p className="card-text">Spoken language: {country.nativeName}</p>
              <p className="card-text">Capital: {country.capital}</p>
              <p className="card-text">Region: {country.region}</p>
              <p className="card-text">Population: {country.population}</p>
              <p className="card-text">Area: {country.area}</p>
              <p className="card-text">Calling codes: {country.callingCodes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Country
