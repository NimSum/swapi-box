import React from 'react';
import PropTypes from 'prop-types';
import Crawl from 'react-star-wars-crawl';
import { CharacterCard } from '../Cards/CharacterCard';

export const CardContainer = ({ opening_crawl, title, release_date, episode_id, cards }) => {
  const romanNumeral = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VII']
  const crawl = (< Crawl
    title={ `Episode ${romanNumeral[episode_id - 1]}` }
    subTitle={ title }
    text={ opening_crawl }
    releaseYear={ release_date }/>)
  
  return !cards.length
    ? (<div className="crawl-container">{crawl}</div>)
    : (<section className="card-container">
        { CharacterCard(cards) }
      </section>)
}

CardContainer.propTypes = {
  opening_crawl: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string
}