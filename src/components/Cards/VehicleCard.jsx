import React from 'react';
import { FavoriteCardBtn } from '../Buttons/Buttons';
import PropTypes from 'prop-types';

export const VehicleCard = ({ card, updateFavoriteCount }) => 
  (
    <article className="vehicle-card">
      < FavoriteCardBtn 
        card={ card }
        updateFavoriteCount={updateFavoriteCount} />
      <h3>{ card.name }</h3>
      <div className="vehicle-specs">
        <p>{ card.model }</p>
        <p>{ card.vehicle_class }</p>
        <p>{ parseInt(card.passengers) + parseInt(card.crew) }</p>
      </div>
    </article>
  )

VehicleCard.propTypes = {
  card: PropTypes.object,
  updateFavoriteCount: PropTypes.func
}