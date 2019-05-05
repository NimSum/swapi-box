import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const PeopleBtn= ({ setActive, activeBtn }) => {
  return (
    <button 
      type="button"
      className={`${activeBtn === "people" 
        ? "active category-btn"
        : "category-btn"}`}
      name="people"
      onClick={ setActive }>
      <img name="people" alt='card background' src={require('../../images/icons/vader.svg')} />
      People
    </button>
  )
}

export const PlanetsBtn = ({ setActive, activeBtn }) => {
  return (
    <button 
      type="button"
      className={`${activeBtn === "planets" 
        ? "active category-btn"
        : "category-btn"}`}
      name="planets"
      onClick={ setActive }>
      <img name="planets" alt='card background' src={require('../../images/icons/death-star.svg')} />
      Planets
    </button>
  )
}

export const VehiclesBtn = ({ setActive, activeBtn }) => {
  return (
    <button 
      type="button"
      className={`${activeBtn === "vehicles" 
        ? "active category-btn"
        : "category-btn"}`}
      name="vehicles"
      onClick={ setActive }>
      <img name="vehicles" alt='card background' src={require('../../images/icons/tie-fighter.svg')} />
      Vehicles
    </button>
  )
}

export const ViewFavoritesBtn = ({ activeBtn, setActive, favoriteCount }) =>  (
    <button 
      type="button"
      className={`${ activeBtn === "favorites" 
        ? "active view-fav-btn"
        : "view-fav-btn"}`}
      onClick={ setActive }
      name="favorites"
      disabled={ !favoriteCount > 0 ? true : false }>
      { !favoriteCount > 0 ? 'No favorites' : 'Favorites' }
      { favoriteCount > 0 && (<span id="favorites" className="fav-total">{ favoriteCount }</span>) }
    </button>
  )

export const HomeBtn = ({ setActive, activeBtn }) => {
  return (
    <button 
      type="button"
      className={ activeBtn === 'home' ? 'active home-btn' : 'home-btn' }
      name="home"
      onClick={ setActive } >
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

  componentDidMount() {
    const storedCopy = JSON.parse(localStorage.getItem('favorites')) || [];
    storedCopy.forEach(card => card.name === this.props.card.name && this.setState({ active: true }));
  }

  saveCard = (storedCopy) => {
    const updatedCopy = storedCopy.concat([ this.props.card ]);
    localStorage.setItem('favorites', JSON.stringify(updatedCopy));
    this.props.updateFavoriteCount()
  }

  deleteCard = (storedCopy) => {
    const updatedCopy = storedCopy.filter(card => card.url !== this.props.card.url);
    localStorage.setItem('favorites', JSON.stringify(updatedCopy));
    this.props.updateFavoriteCount()
  }

  toggleFavorite = () => {
    const storedCopy = JSON.parse(localStorage.getItem('favorites')) || [];
    this.setState({ active: !this.state.active}, () => {
      this.state.active 
        ? this.saveCard(storedCopy)
        : this.deleteCard(storedCopy)
    }) 
  }

  render() {
    return (
      <button 
        className={this.state.active ? 'active-fav favorite-card-btn' : 'favorite-card-btn'}
        name="favorite-card"
        title="Add to Favorites"
        type="button"
        onClick={this.toggleFavorite}>
        <img alt='card background' src={require('../../images/icons/empire.png')} />
        <img alt='card background' src={require(`../../images/icons/${this.state.active ? 'active-star.svg' : 'inactive-star.svg'}`)} />
        <img alt='card background' src={require('../../images/icons/rebel-alliance.png')} />
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
  activeBtn: PropTypes.string, 
  setActive: PropTypes.func, 
  favoriteCount: PropTypes.number 
}
HomeBtn.propTypes = {
  activeBtn: PropTypes.string,
  setActive: PropTypes.func
}
FavoriteCardBtn.propTypes = {
  card: PropTypes.object
}