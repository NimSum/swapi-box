import React from 'react';
import PropTypes from 'prop-types';

export const CardContainer = ({opening_crawl}) => {
  return opening_crawl 
    ? (<p>{opening_crawl}</p>)
    : (<div><p>Loading</p></div>)
}

CardContainer.propTypes = {
  opening_crawl: PropTypes.string
}