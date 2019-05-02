import React from 'react';
import PropTypes from 'prop-types';
import { FavoriteCardBtn } from '../Buttons/Buttons';

export const CharacterCard = ({ cards, updateFavoriteCount }) => 
  cards.map(character => (
    <article key={ character.id } className="character-card">
      < FavoriteCardBtn 
       card={ character }
       updateFavoriteCount={updateFavoriteCount}
       type="character"/>
      <h3>{ character.name }</h3>
      <h4>{ character.speciesName }</h4>
      <div className="home-planet">
        <h4>{ character.worldName }</h4>
        <p>{ character.worldPopulation }</p>
      </div>
    </article>
  ))

CharacterCard.propTypes = {
  cards: PropTypes.array
}