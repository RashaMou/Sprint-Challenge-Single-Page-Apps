import React, { useState } from "react";
import {NavLink, Route} from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";
import WelcomePage from './WelcomePage'
import CharacterList from './CharacterList';
import LocationsList from './LocationsList';

export default function TabNav() {
  
  const [activeItem, setActiveItem] = useState('Home Page')

  const handleItemClick = (e, { name }) => setActiveItem({ activeItem: name })

  return (
    <div>
      <Menu tabular>
        <Menu.Item name='Home' active={activeItem === 'Home'} as={NavLink} exact to="/" onClick={handleItemClick} />
        <Menu.Item name='Characters' active={activeItem === 'Characters'} as={NavLink}exact to="/characters" onClick={handleItemClick} />
        <Menu.Item name='Locations' active={activeItem === 'Locations'} as={NavLink} exact to="/locations" onClick={handleItemClick} />
      </Menu>
      <Segment attached='bottom'>
        <Route exact path='/' component={WelcomePage} />
        <Route exact path='/characters' component={CharacterList}/>
        <Route exact path='/locations' component={LocationsList} />
      </Segment>
    </div>
  )
};
