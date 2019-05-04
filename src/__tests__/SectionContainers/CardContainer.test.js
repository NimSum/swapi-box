import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer } from '../../SectionContainers/CardContainer';

describe('Card Container', () => {
  const mockMovie = {
    opening_crawl: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget volutpat risus. Quisque luctus dictum pellentesque.',
     title: 'Lorem Ipsum Awakens',
      release_date: '2019-04-30',
       episode_id: 5
  }
  const mockCards = [ 
    { card: 'one', id: 1 }, 
    {card: 'two', id: 2 } 
  ];
  const mockUpdateFavoriteCount = jest.fn();
  
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      < CardContainer 
        movie={ mockMovie }
        cards={ mockCards }
        updateFavoriteCount={ mockUpdateFavoriteCount }/>
    )
  })

  it('Should match snapshot taken', () => {
    expect(wrapper).toMatchSnapshot();
  })

})