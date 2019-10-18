import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage'
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';
import SearchForm from './components/SearchForm';


export default function App() {
  
  const[characters, addCharacters] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res.data.results)
        addCharacters(res.data.results)
      })
      .catch(err => {
        console.log('Error', err)
      })
  }, []);


  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage} />
      <SearchForm characters={characters}/>
      <Route path='/characters' render={() => 
        <CharacterList characters={characters}/>
      } />
      <Route path='/locations' component={LocationsList} />
    </main>
  );
}
