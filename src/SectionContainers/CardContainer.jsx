import React from 'react';
import PropTypes from 'prop-types';
import Crawl from 'react-star-wars-crawl';
import { CharacterCard } from '../components/Cards/CharacterCard';
import { PlanetCard } from '../components/Cards/PlanetCard';
import { VehicleCard } from '../components/Cards/VehicleCard';
import { Bb8LoadingIcon } from '../components/loading_indicator/Icons';
import { ShowMoreLessBtns } from '../components/Buttons/Buttons';

export const CardContainer = ({ movie, loading, category, cards, updateFavoriteCount, showMore, showLess, currentPage }) => {
  const { opening_crawl, title, release_date, episode_id } = movie;
  const romanNumeral = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VII'];

  const crawl = 
        (< Crawl
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

  const showMoreLessBtns = (
    < ShowMoreLessBtns 
      showMore={ showMore }
      showLess={ showLess }
      currentPage= { currentPage } />
  )

  const cardsContainer = cards.length 
    ? (<section className="card-container">
        { cardElements } 
        { category !== 'favorites' && showMoreLessBtns }
      </section>)
    : (<div className="bb8-container">< Bb8LoadingIcon /></div>)

  return category === 'home'
  ? (<div className="crawl-container">{ loading ? < Bb8LoadingIcon /> : crawl }</div>)
  : cardsContainer
}

CardContainer.propTypes = {
  movie: PropTypes.object,
  loading: PropTypes.bool,
  loadingCards: PropTypes.bool,
  cards: PropTypes.array,
  updateFavoriteCount: PropTypes.func,
  showMore: PropTypes.func,
  showLess: PropTypes.func
}