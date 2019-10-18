import React from "react";
import { NavLink } from 'react-router-dom';

export default function CharacterCard(props) {
  return (
    <div className='cards-wrapper'>
      <NavLink to='/'><button className='home-button'>Home</button></NavLink>
      {props.peeps.map(peep => {
        return (
          <div className='character-card'>
            <h2>{peep.name}</h2>
            <p>{peep.gender}</p>
            <img src={peep.image} alt={peep.name}/>
            <p>Status: {peep.status}</p>
            <p>Species: {peep.species}</p>
            <p>Origin: <NavLink to='/locations/:id'>{peep.origin.name}</NavLink></p> {/*make location list page and card, and then link the cards to this id*/}
          </div>
        )
      })}
    </div>
  );
  
}
