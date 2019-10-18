import React, { useState, useEffect } from "react";
import { withRouter, NavLink, Route } from 'react-router-dom';

function SearchForm(props) { 
  const [searchTerm, setSearchTerm] = useState("");

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
 
  return (
    <section className="search-form">
      <form>
        <label htmlFor="name"></label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search Characters"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
    </section>
  );
}

export default withRouter(SearchForm)