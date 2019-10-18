import React from "react";
import { NavLink } from 'react-router-dom';

function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <nav>
          <NavLink to='/characters'>Characters</NavLink>
          <NavLink to='/locations'>Locations</NavLink>
        </nav>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}

export default WelcomePage
