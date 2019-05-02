import React from 'react';

export const PlanetCard = ({ cards }) => 
// Name
// Terrain
// Population
// Climate
// Residents
// A button to “Favorite” the planet
  cards.map(planet => (
    <article key={ planet.id } className="planet-card">
      <h3>{ planet.name }</h3>
      <p>{ planet.terrain }</p>
      <p>{ planet.climate }</p>      
      <p>{ planet.population }</p>
      <div className="residents">
        { planet.residentNames.map(person => (
        <p key={person.id}>{ person.name }</p>)) }
      </div>
    </article>
  ))