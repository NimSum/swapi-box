import React from 'react';
import { FavoriteCardBtn } from '../Buttons/Buttons';
import PropTypes from 'prop-types';

export const PlanetCard = ({ card, updateFavoriteCount }) => {
  const randomBgNum = Math.floor(Math.random() * 7) + 1;
  return (
    <article key={ card.id } className="planet-card">
      < FavoriteCardBtn  
        updateFavoriteCount={updateFavoriteCount}
        card={ card }/>
      <h3>{ card.name }</h3>
      <div className="terrain-container">
        <h4>Terrain:</h4>
        { card.terrain.split(',').map(terrain => (<p>{ terrain }</p>)) }
      </div>
      <h4>Climate:</h4>
      <p>{ card.climate }</p>  
      <h4>Population</h4>    
      <p>{ card.population }</p>
      <div className="residents">
        <h4>Residents:</h4>
        { card.residentNames.length 
          ? card.residentNames.map(person => (
            <p key={person.id}>{ person.name }</p>))
          : (<p>None</p>) }
      </div>
      <img className="bg-img" alt='card background' src={require(`../../images/card-backgrounds/planet-${randomBgNum}.png`)} />
    </article>
  )
}
PlanetCard.propTypes = {
  card: PropTypes.object,
  updateFavoriteCount: PropTypes.func
}
