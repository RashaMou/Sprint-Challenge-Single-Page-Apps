import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList(props) {
  
  return (
    <div>
      <section className="character-list">
        {props.characters.map(character => {
          return (
            <CharacterCard peeps={props.characters}/>
          )
        })}
      </section>
    </div>
  );
}
