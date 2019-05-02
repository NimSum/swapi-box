import React from 'react';
import PropTypes from 'prop-types';
import { FavoriteCardBtn } from '../Buttons/Buttons';

export const CharacterCard = ({ card, updateFavoriteCount }) => 
  (
    <article key={ card.id } className="character-card">
      < FavoriteCardBtn 
       card={ card }
       updateFavoriteCount={updateFavoriteCount} />
      <h3>{ card.name }</h3>
      <h4>{ card.speciesName }</h4>
      <div className="home-planet">
        <h4>{ card.worldName }</h4>
        <p>{ card.worldPopulation }</p>
      </div>
    </article>
  )

CharacterCard.propTypes = {
  cards: PropTypes.array
}