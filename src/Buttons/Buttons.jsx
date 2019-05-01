import React from 'react';

export const PeopleBtn= () => {
  return (
    <button 
      type="button"
      className="category-button">
      People
    </button>
  )
}

export const PlanetsBtn = () => {
  return (
    <button 
      type="button"
      className="category-button">
      Planets
    </button>
  )
}

export const VehiclesBtn = () => {
  return (
    <button 
      type="button"
      className="category-button">
      Vehicles
    </button>
  )
}

export const ViewFavoritesBtn = ({ total }) => {
  return (
    <button 
      type="button"
      className="people-button">
      Favorites 
      <span className="fav-total">{ total }</span>
    </button>
  )
}

export const HomeBtn = () => {
  return (
    <button 
      type="button"
      className="home-button">
      Home
    </button>
  )
}