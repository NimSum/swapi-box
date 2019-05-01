import React, { Component } from 'react'
import { PlanetsBtn, PeopleBtn, VehiclesBtn } from '../Buttons/Buttons';

export class CategoryBtnSection extends Component {
  constructor() {
    super();
    this.state = {
      activeBtn: ''
    }
  }

  setActiveBtn = e => {
    this.setState({ activeBtn: e.target.name });
    this.props.changeCategory(e.target.name);
  }

  render() {
    const { activeBtn } = this.state;

    return (
      <section className="categories-container">
        < PlanetsBtn 
          setActive={ this.setActiveBtn }
          activeBtn={ activeBtn } />
        < PeopleBtn 
          setActive={ this.setActiveBtn }
          activeBtn={ activeBtn } />
        < VehiclesBtn 
          setActive={ this.setActiveBtn }
          activeBtn={ activeBtn } />
      </section>
    )
  }
}

export default CategoryBtnSection
