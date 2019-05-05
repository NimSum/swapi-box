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
        <h4>Model:</h4>
        <p>{ card.model }</p>
        <h4>Class:</h4>
        <p>{ card.vehicle_class }</p>
        <h4>Crew:</h4>
        <p>{ card.crew }</p>
        <h4>Passenger Capacity:</h4>
        <p>{ card.passengers }</p>
      </div>
      <img className="bg-img" alt='card background' src={require('../../images/card-backgrounds/vehicle-bg.png')} />
    </article>
  )

VehicleCard.propTypes = {
  card: PropTypes.object,
  updateFavoriteCount: PropTypes.func
}