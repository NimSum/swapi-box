import { mount } from 'enzyme';
import React from 'react';
import { VehicleCard } from '../../../components/Cards/VehicleCard';

describe('Character card', () => {
  const mockCard = { 
    id: 123, 
    name: 'Tesla', 
    model: 'Model 3', 
    vehicle_class: 'Wheeled', 
    passengers: '1',
    crew: '1'
  }
  
  const mockupdateFavoriteCount = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      < VehicleCard 
        card={ mockCard }
        updateFavoriteCount={ mockupdateFavoriteCount }/>
    )
  })

  it('Should match snapshot with card passed in', () => {
    expect(wrapper).toMatchSnapshot();
  })

})