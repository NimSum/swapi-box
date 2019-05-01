import React from 'react';
import PropTypes from 'prop-types';

export const CardContainer = ({ opening }) => {
  return opening 
    ? (<p>{ opening }</p>)
    : (<div><p>Loading</p></div>)
}

CardContainer.propTypes = {
  opening_crawl: PropTypes.string
}