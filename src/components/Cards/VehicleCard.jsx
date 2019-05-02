import React from 'react';
import { FavoriteCardBtn } from '../Buttons/Buttons';

export const VehicleCard = ({ cards, updateFavoriteCount }) => 
  cards.map(vehicle => (
    <article className="vehicle-card">
      < FavoriteCardBtn 
        card={ vehicle }
        updateFavoriteCount={updateFavoriteCount}
        type="vehicle" />
      <h3>{ vehicle.name }</h3>
      <div className="vehicle-specs">
        <p>{ vehicle.model }</p>
        <p>{ vehicle.vehicle_class }</p>
        <p>{ parseInt(vehicle.passengers) + parseInt(vehicle.crew) }</p>
      </div>
    </article>
  ))
