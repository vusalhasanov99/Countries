import React from 'react'
import { Link } from 'react-router-dom'

function Countries({ name, population, flag }) {
  return (
    <div className='countries'>
      <div className="card-group" >
        <div className="card" style={{ height: "300px", width: "250px" }}>
          <img className="card-img-top" src={flag} style={{ height: "50%", width: "100%" }} alt={name} />
          <Link to={'/' +name}>
            <div className="card-body">
              <h4 className="card-title">{name}</h4>
              <p className="card-text">Population:{population}</p>
            </div>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Countries
