import React from 'react';

export const VehicleCard = ({ cards }) => 
  cards.map(vehicle => (
    <article className="vehicle-card">
      <h3>{ vehicle.name }</h3>
      <div className="vehicle-specs">
        <p>{ vehicle.model }</p>
        <p>{ vehicle.vehicle_class }</p>
        <p>{ parseInt(vehicle.passengers) + parseInt(vehicle.crew) }</p>
      </div>
    </article>
  ))
