import React from 'react';
import PropTypes from 'prop-types';


export const Header = ({ title }) => {
  return (
    <header>
      <h1>Star Wars</h1>
      <h2>{ title }</h2>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string
}