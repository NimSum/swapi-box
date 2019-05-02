import React from 'react';
import { FavoriteCardBtn } from '../Buttons/Buttons';

export const PlanetCard = ({ cards, updateFavoriteCount }) => 
  cards.map(planet => (
    <article key={ planet.id } className="planet-card">
      < FavoriteCardBtn  
        updateFavoriteCount={updateFavoriteCount}
        card={ planet }
        type="planet"/>
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