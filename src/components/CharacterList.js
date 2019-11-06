import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
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
      <TextField
        id="standard-search"
        label="Search Characters"
        type="search"
        margin="normal"
        onChange={handleChange}
        value={searchTerm}
        className='search'
      />
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
