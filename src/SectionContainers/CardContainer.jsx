import React from 'react';
import PropTypes from 'prop-types';
import Crawl from 'react-star-wars-crawl';
import { CharacterCard } from '../components/Cards/CharacterCard';
import { PlanetCard } from '../components/Cards/PlanetCard';
import { VehicleCard } from '../components/Cards/VehicleCard';
import { Bb8LoadingIcon } from '../components/loading_indicator/Icons';

export const CardContainer = ({ movie, loading, loadingCards, cards, updateFavoriteCount }) => {
  const { opening_crawl, title, release_date, episode_id } = movie;
  const romanNumeral = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VII'];

  const crawl = (
      < Crawl
        title={ `Episode ${romanNumeral[episode_id - 1]}` }
        subTitle={ title }
        text={ opening_crawl }
        releaseYear={ release_date }
      />);

  const cardElements = cards.map(card => {
    let result;
    switch(true) {
      case card.type === 'character':
      result = (< CharacterCard card={ card }  key={ card.id }
        updateFavoriteCount={updateFavoriteCount} />)
      break;
      case card.type === 'planet':
      result = (< PlanetCard card={ card } key={ card.id }
        updateFavoriteCount={updateFavoriteCount} />)
      break;
      default:
      result = (< VehicleCard card={ card }  key={ card.id }
        updateFavoriteCount={updateFavoriteCount} />)
    }
    return result;
  });

  return loading
  ? (<section className="card-container">
        { cardElements }
      </section>)
  : (<div className="crawl-container">{ !loading ? (< Bb8LoadingIcon />) : crawl }</div>)
}

CardContainer.propTypes = {
  movie: PropTypes.object,
  loading: PropTypes.bool,
  loadingCards: PropTypes.bool,
  cards: PropTypes.array,
  updateFavoriteCount: PropTypes.func
}