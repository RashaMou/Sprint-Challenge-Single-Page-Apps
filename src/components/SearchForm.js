import React, { useState, useEffect } from "react";

export default function SearchForm(props) { 
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
 
  return (
    <section className="search-form">
      <form>
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <div className="character-list">
        <ul>
          {searchResults.map(result => (
            <li key={result}>{result.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
