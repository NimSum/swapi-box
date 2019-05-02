import React from 'react';
import PropTypes from 'prop-types';
import Crawl from 'react-star-wars-crawl';
import { CharacterCard } from '../Cards/CharacterCard';

export const CardContainer = ({ opening_crawl, title, release_date, episode_id, cards }) => {

  const crawl = (< Crawl
    title={ `Episode ${episode_id}` }
    subTitle={ title }
    text={ opening_crawl }/>)
  
  return !cards.length
    ? crawl
    : (<section className="card-container">
        { CharacterCard(cards) }
      </section>)
}

CardContainer.propTypes = {
  opening_crawl: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string
}