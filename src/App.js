import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage'
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';



export default function App() {

  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/characters' component={CharacterList}/>
      <Route exact path='/locations' component={LocationsList} />
    </main>
  );
}
