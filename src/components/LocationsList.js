import React, { useEffect, useState } from 'react';
import LocationCard from './LocationCard';
import axios from 'axios';

export default function LocationsList() {
  const[locations, addLocations] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location/')
      .then(res => {
        addLocations(res.data.results)
      })
      .catch(err => {
        console.log('Error', err)
      })
  }, []);

  return (
    <div>
      <h2>The Rick and Morty Universe</h2>
      <section className="location-list">
        {locations.map(location => {
          return (
            <LocationCard locations={locations}/>
          )
        })}
      </section>
    </div>
  );
}