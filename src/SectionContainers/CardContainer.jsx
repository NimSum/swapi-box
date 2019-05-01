import React from 'react';
import PropTypes from 'prop-types';
import Crawl from 'react-star-wars-crawl';

export const CardContainer = ({ opening_crawl, title, release_date, episode_id }) => {
  return opening_crawl 
    ? (< Crawl
          title={ `Episode ${episode_id}` }
          subTitle={ title }
          text={ opening_crawl }/>)
    : (<div><p>Loading</p></div>)
}

CardContainer.propTypes = {
  opening_crawl: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string
}