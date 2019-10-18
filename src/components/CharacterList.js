import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList(props) {
  const[characters, addCharacters] = useState([])
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        const peeps= res.data.results.filter(peep =>
          peep.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        addCharacters(peeps)  
      })
      .catch(err => {
        console.log('Error', err)
      })
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <NavLink to='/'><button className='home-button'>Home</button></NavLink>
      <form className="search">
        <input
          type="text"
          onChange={handleChange}
          value={searchTerm}
          name="name"
          tabIndex="0"
          placeholder="Search Characters"
          autoComplete="off"
        />
      </form>
      <section className="character-list">
        {characters.map(character => {
          return (
            <CharacterCard peeps={character}/>
          )
        })}
      </section>
    </div>
  );
}
