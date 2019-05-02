import React from 'react';

export const CharacterCard = cards => 
  cards.map(character => (
    <article className="character-card">
      <h3>{ character.name }</h3>
      <h4>{ character.species }</h4>
      <div>
        <h4>{ character.homeworld }</h4>
        <p>{ character.population }</p>
      </div>
    </article>
  ))
