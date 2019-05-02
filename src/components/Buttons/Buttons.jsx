import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const PeopleBtn= ({setActive, activeBtn}) => {
  return (
    <button 
      type="button"
      className={`${activeBtn === "people" 
        ? "active category-btn"
        : "category-btn"}`}
      name="people"
      onClick={ setActive }>
      People
    </button>
  )
}

export const PlanetsBtn = ({setActive, activeBtn}) => {
  return (
    <button 
      type="button"
      className={`${activeBtn === "planets" 
        ? "active category-btn"
        : "category-btn"}`}
      name="planets"
      onClick={ setActive }>
      Planets
    </button>
  )
}

export const VehiclesBtn = ({setActive, activeBtn}) => {
  return (
    <button 
      type="button"
      className={`${activeBtn === "vehicles" 
        ? "active category-btn"
        : "category-btn"}`}
      name="vehicles"
      onClick={ setActive }>
      Vehicles
    </button>
  )
}

export const ViewFavoritesBtn = ({ total }) => {
  return (
    <button 
      type="button"
      className="people-button"
      name="favorites">
      Favorites 
      <span className="fav-total">{ total }</span>
    </button>
  )
}

export const HomeBtn = () => {
  return (
    <button 
      type="button"
      className="home-button"
      name="home">
      Home
    </button>
  )
}

export class FavoriteCardBtn extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    }
  }

  render() {
    return (
      <button 
        type="button"
        className="favorite-card-button"
        name="favorite-card">
        Favorite This, change to image logo
      </button>
    )
  } 
}

PeopleBtn.propTypes = {
  setActive: PropTypes.func,
  activeBtn: PropTypes.string
}
PlanetsBtn.propTypes = {
  setActive: PropTypes.func,
  activeBtn: PropTypes.string
}
VehiclesBtn.propTypes = {
  setActive: PropTypes.func,
  activeBtn: PropTypes.string
}
ViewFavoritesBtn.propTypes = {
  
}
HomeBtn.propTypes = {
  
}
FavoriteCardBtn.propTypes = {
  
}