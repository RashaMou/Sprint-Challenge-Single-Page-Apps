import React from "react";

export default function CharacterCard(props) {
  console.log(props.peeps)
  return (
    <div className='cards-wrapper'>
      <div className='character-card'>
            <h2>{props.peeps.name}</h2>
            <p>{props.peeps.gender}</p>
            <img src={props.peeps.image} alt={props.peeps.name}/>
            <p>Status: {props.peeps.status}</p>
            <p>Species: {props.peeps.species}</p>
            {/* <p>Origin: <NavLink to='/locations/:id'>{props.peeps.origin.name}</NavLink></p> make location list page and card, and then link the cards to this id */}
          </div>
    </div>
  );
}
