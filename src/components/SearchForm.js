import React, { useState, useEffect } from "react";
import { withRouter, NavLink, Route } from 'react-router-dom';
import SearchResults from './SearchResults'

function SearchForm(props) { 
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = props.characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    console.log('results', results)
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
    console.log('search term', searchTerm)
  };

  const onSubmit = event => {
    event.preventDefault()
    props.history.push('/results')
  }
 
  return (
    <section className="search-form">
      <form onSubmit={onSubmit}>
        <label htmlFor="name"></label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search Characters"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type='submit'>Search</button>
      </form>
      <div className="character-list">
      <Route path='/results' render={() =>
        <SearchResults characters={searchResults}/>
      }/>
      </div>
    </section>
  );
}

export default withRouter(SearchForm)