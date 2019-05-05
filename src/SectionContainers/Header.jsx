import React from 'react';

export const Header = ({ category }) => {
  return (
    <header>
      <img src={require('../images/star-wars-title.png')} alt="Star Wars Title"/>
      { category && <h2>{ category.toUpperCase() }</h2>}
    </header>
  )
}
