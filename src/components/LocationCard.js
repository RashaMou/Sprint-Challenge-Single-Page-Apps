import React from "react";
import { NavLink } from 'react-router-dom';


export default function LocationCard(props) {
  console.log('location props', props)
  return (
    <div className='locations-wrapper'>
      <NavLink to='/'><button className='home-button'>Home</button></NavLink>
      {props.locations.map(location => {
        return (
          <div className='location-card'>
            <h2>{location.name}</h2>
            <p>{location.type}</p>
            <p>{location.dimension}</p>
            {/* {location.residents.map(resident => {
              return <p>{resident.name}</p>
            })} */}
          </div>
        )
      })}
      
    </div>
  )
}
