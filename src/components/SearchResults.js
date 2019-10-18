import React from 'react';

export default function SearchResults(props) {
  console.log('search results props', props)
  return(
    <div>
      <ul>
          {props.characters.map(character => (
            <li key={character}>{character.name}</li>
          ))}
        </ul>
    </div>
  )
}
