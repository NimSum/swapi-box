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
  let mockCards = [ 
    { type: 'planet', id: 1 }, 
    { type: 'vehicle', id: 2 },
    { type: 'people', id: 2 } 
  ];
  let mockLoading = false;
  let mockCategory = "home";
  const mockCurrentPage = 1;
  const mockShowMore = jest.fn();
  const mockShowLess = jest.fn();
  const mockUpdateFavoriteCount = jest.fn();
  
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      < CardContainer 
        movie={ mockMovie }
        cards={ mockCards }
        updateFavoriteCount={ mockUpdateFavoriteCount }
        loading={ mockLoading }
        category={ mockCategory }
        showMore={ mockShowMore }
        showLess= { mockShowLess }
        currentPage={ mockCurrentPage }/>
    )
  })

  it('Should match snapshot taken', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('Should render bb8 if fetch is not done', () => {
    mockLoading = true;

    wrapper = shallow( 
      < CardContainer 
        movie={ mockMovie }
        cards={ mockCards }
        loading={ mockLoading }
      />
    )
    expect(wrapper).toMatchSnapshot();
  })

  it('Should render opening crawl once fetch is done', () => {
    wrapper = shallow( 
      < CardContainer 
        movie={ mockMovie }
        cards={ [] }
        loading={ mockLoading }
      />
    )
    expect(wrapper).toMatchSnapshot();
  })

  it('Should render render cards when category is changed', () => {
    mockCategory = 'planets';

    wrapper = shallow( 
      < CardContainer 
        movie={ mockMovie }
        cards={ mockCards }
        category={ mockCategory }
      />
    )
    expect(wrapper).toMatchSnapshot();
  })

})