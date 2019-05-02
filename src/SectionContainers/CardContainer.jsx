import React from 'react';
import PropTypes from 'prop-types';
import Crawl from 'react-star-wars-crawl';
import { CharacterCard } from '../components/Cards/CharacterCard';
import { PlanetCard } from '../components/Cards/PlanetCard';

export const CardContainer = ({ opening_crawl, title, release_date, episode_id, cards, category }) => {
  const romanNumeral = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VII']
  const crawl = (< Crawl
    title={ `Episode ${romanNumeral[episode_id - 1]}` }
    subTitle={ title }
    text={ opening_crawl }
    releaseYear={ release_date }/>)
  
  return !cards.length
    ? (<div className="crawl-container">{crawl}</div>)
    : (<section className="card-container">
        { category === 'people' && < CharacterCard cards={ cards } /> }
        { category === 'planets' && < PlanetCard cards={ cards } /> }
      </section>)
}

CardContainer.propTypes = {
  opening_crawl: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string,
  episode_id: PropTypes.number,
  cards: PropTypes.array
}