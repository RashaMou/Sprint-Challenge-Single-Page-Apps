import React from "react";
import { NavLink } from 'react-router-dom';
import { Card } from 'semantic-ui-react';


export default function CharacterCard(props) {
  return (
    <div className='cards-wrapper'>
      <Card className='ui-card'>
            <h2>{props.peeps.name}</h2>
            <img className='peep-image' src={props.peeps.image} alt={props.peeps.name}/>
            <p><span className='card-info'>Status:  </span>{props.peeps.status}</p>
            <p><span className='card-info'>Species: </span>{props.peeps.species}</p>
            <p>Origin: <NavLink to='/locations/:id'>{props.peeps.origin.name}</NavLink></p> 
          </Card>
    </div>
  );
}
