import React from "react";
import { Card } from 'semantic-ui-react';


export default function LocationCard(props) {
  return (
    <div className='cards-wrapper'>
      <Card className='ui-card'>
        <h2>{props.location.name}</h2>
        <p>{props.location.type}</p>
        <p>{props.location.dimension}</p>
        {/* {location.residents.map(resident => {
          return <p>{resident.name}</p>
        })} */}
      </Card>
    </div>
  )}
