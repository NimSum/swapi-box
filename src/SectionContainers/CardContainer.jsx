import React from 'react';
import PropTypes from 'prop-types';
import Crawl from 'react-star-wars-crawl';
import { CharacterCard } from '../components/Cards/CharacterCard';
import { PlanetCard } from '../components/Cards/PlanetCard';
import { VehicleCard } from '../components/Cards/VehicleCard';

export const CardContainer = ({ opening_crawl, title, release_date, episode_id, cards, category, updateFavoriteCount }) => {
  const romanNumeral = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VII']
  const crawl = (
    < Crawl
      title={ `Episode ${romanNumeral[episode_id - 1]}` }
      subTitle={ title }
      text={ opening_crawl }
      releaseYear={ release_date }
    />)
  
  const cardElements = cards.map(card => {
    let result;
    switch(true) {
      case card.type === 'character':
      result = (< CharacterCard card={ card } 
        updateFavoriteCount={updateFavoriteCount} />)
      break;
      case card.type === 'planet':
      result = (< PlanetCard card={ card } 
        updateFavoriteCount={updateFavoriteCount} />)
      break;
      default:
      result = (< VehicleCard card={ card } 
        updateFavoriteCount={updateFavoriteCount} />)
    }
    return result;
  })

  return !cards.length
    ? (<div className="crawl-container">{crawl}</div>)
    : (<section className="card-container">
        { cardElements }
      </section>)
}

CardContainer.propTypes = {
  opening_crawl: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string,
  episode_id: PropTypes.number,
  cards: PropTypes.array,
  category: PropTypes.string
}