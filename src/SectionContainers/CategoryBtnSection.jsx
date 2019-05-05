import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PlanetsBtn, PeopleBtn, VehiclesBtn, ViewFavoritesBtn, HomeBtn } from '../components/Buttons/Buttons';

export class CategoryBtnSection extends Component {
  constructor() {
    super();
    this.state = {
      activeBtn: '',
    }
  }

  setActiveBtn = e => {
    this.setState({ activeBtn: e.target.name });
    this.props.changeCategory(e.target.name);
  }

  render() {
    const { activeBtn } = this.state;

    return (
      <section className="categories-btn-container">
        <div className="btn-container">
          < PlanetsBtn 
            setActive={ this.setActiveBtn }
            activeBtn={ activeBtn } />
          < PeopleBtn 
            setActive={ this.setActiveBtn }
            activeBtn={ activeBtn } />
          < VehiclesBtn 
            setActive={ this.setActiveBtn }
            activeBtn={ activeBtn } />
        </div>
        < HomeBtn 
          setActive={ this.setActiveBtn }
          activeBtn={ this.props.currCategory } />
        < ViewFavoritesBtn 
            setActive={ this.setActiveBtn }
            activeBtn={ activeBtn } 
            favoriteCount={ this.props.favoriteCount } />
      </section>
    )
  }
}

CategoryBtnSection.propTypes = {
  changeCategory: PropTypes.func,
  favoriteCount: PropTypes.number,
  updateFavoriteCount: PropTypes.func
}
