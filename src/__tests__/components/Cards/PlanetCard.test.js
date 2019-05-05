import { mount } from 'enzyme';
import React from 'react';
import { PlanetCard } from '../../../components/Cards/PlanetCard';

describe('Character card', () => {
  const mockupdateFavoriteCount = jest.fn();
  const mockCard = { 
    id: 123, 
    name: 'Earth', 
    terrain: 'Very Watery',
    climate: 'Hot or Cold', 
    population: '7500000000',
    imgNum: 1,
    residentNames: [ 
      { id: 1, name: 'Nimsum' },
      { id: 2, name: 'Dimsum' }
    ]
  };
  
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      < PlanetCard 
        card={ mockCard }
        updateFavoriteCount={ mockupdateFavoriteCount }/>
    )
  })

  it('Should match snapshot with card passed in', () => {
    expect(wrapper).toMatchSnapshot();
  })

})