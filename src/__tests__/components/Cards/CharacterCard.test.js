import { mount } from 'enzyme';
import React from 'react';
import { CharacterCard } from '../../../components/Cards/CharacterCard';

describe('Character card', () => {
  const mockCard = { 
    id: 123, 
    name: 'Nimsumm', 
    speciesName: 'Human', 
    worldName: 'Earth', 
    worldPopulation: '7500000000'
  }
  const mockupdateFavoriteCount = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      < CharacterCard 
        card={ mockCard }
        updateFavoriteCount={ mockupdateFavoriteCount }/>
    )
  })

  it('Should match snapshot with card passed in', () => {
    expect(wrapper).toMatchSnapshot();
  })

})