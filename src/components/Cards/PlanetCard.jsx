import React from 'react';
import { FavoriteCardBtn } from '../Buttons/Buttons';

export const PlanetCard = ({ card, updateFavoriteCount }) => 
  (
    <article key={ card.id } className="planet-card">
      < FavoriteCardBtn  
        updateFavoriteCount={updateFavoriteCount}
        card={ card }/>
      <h3>{ card.name }</h3>
      <p>{ card.terrain }</p>
      <p>{ card.climate }</p>      
      <p>{ card.population }</p>
      <div className="residents">
        { card.residentNames.map(person => (
        <p key={person.id}>{ person.name }</p>)) }
      </div>
    </article>
  )