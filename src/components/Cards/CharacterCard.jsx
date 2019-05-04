import React from 'react';
import PropTypes from 'prop-types';
import { FavoriteCardBtn } from '../Buttons/Buttons';

export const CharacterCard = ({ card, updateFavoriteCount }) => 
  (<article key={ card.id } className="character-card">
      < FavoriteCardBtn 
       card={ card }
       updateFavoriteCount={updateFavoriteCount} />
      <h3>{ card.name }</h3>
      <h4>{ card.speciesName }</h4>
      <div className="home-planet">
        <h4>Home Planet:</h4>
        <p className="world-name">{ card.worldName }</p>
        <p>{ card.worldPopulation }</p>
      </div>
      <img className="bg-img" alt='card background' src={require('../../images/card-backgrounds/character-bg.png')} />
    </article>)

CharacterCard.propTypes = {
  card: PropTypes.object,
  updateFavoriteCount: PropTypes.func
}