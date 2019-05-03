import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../../App/App';
import * as fetchMethods from '../../ApiCalls/apiFetches';

describe('App component', () => {

  let wrapper;
  let spyFavCount;
  let fetchPlanetsSpy;
  let fetchVehiclesSpy;
  let renderFavoritesSpy;
  let fetchPeopleSpy;

  let categoryFetchSpy =  jest.spyOn(fetchMethods, 'fetchCategory');
  let fetchMovieSpy = jest.spyOn(fetchMethods, 'fetchRandomMovie');

  beforeEach(() => {
    wrapper = shallow(< App />)
    spyFavCount = jest.spyOn(wrapper.instance() , 'updateFavoriteCount');
    fetchPlanetsSpy = jest.spyOn(wrapper.instance(), 'fetchPlanets');
    fetchVehiclesSpy = jest.spyOn(wrapper.instance(), 'fetchVehicles');
    renderFavoritesSpy = jest.spyOn(wrapper.instance(), 'renderFavorites')
    fetchPeopleSpy = jest.spyOn(wrapper.instance(), 'fetchPeople');
  });

  afterEach(() => {
    categoryFetchSpy.mockClear();
    fetchMovieSpy.mockClear();
  })

  

  it('Should have default states', () => {
    const mockState = {
      selectedMovie: {},
      loading: false,
      categorySelected: '',
      renderCards: [],
      favoriteCount: 0
    }
    expect(wrapper.state()).toEqual(mockState);
  });

  it('Should invoke methods when mounted', () => {
    expect(fetchMovieSpy).toHaveBeenCalledTimes(1);
    wrapper.instance().componentDidMount();
    expect(spyFavCount).toHaveBeenCalledTimes(1);
  });

  it('Should update favorite count', () => {
    localStorage.setItem('favorites', JSON.stringify([{ item: 1}, { item: 2}]))
    wrapper.instance().updateFavoriteCount();
    expect(wrapper.state().favoriteCount).toEqual(2);
  });

  describe('Setting Category', () => {
    it('Should trigger fetch people cards and change category to people', () => {
      wrapper.instance().changeCategory('people');
      expect(wrapper.state().categorySelected).toEqual('people');
      expect(fetchPeopleSpy).toHaveBeenCalledTimes(1);
    });
  
    it('Should trigger fetch vehicle cards and change category to vehicles', () => {
      wrapper.instance().changeCategory('vehicles');
      expect(wrapper.state().categorySelected).toEqual('vehicles');
      expect(fetchVehiclesSpy).toHaveBeenCalledTimes(1);
    });
  
    it('Should trigger fetch planet cards and change category to planets', () => {
      wrapper.instance().changeCategory('planets');
      expect(wrapper.state().categorySelected).toEqual('planets');
      expect(fetchPlanetsSpy).toHaveBeenCalledTimes(1);
    });
  
    it('Should trigger render favorited cards and change category to favorites', () => {
      wrapper.instance().changeCategory('favorites');
      expect(wrapper.state().categorySelected).toEqual('favorites');
      expect(renderFavoritesSpy).toHaveBeenCalledTimes(1);
    });
  })

  describe('Fetch methods', () => {
    it('Should fetch people', () => {
      wrapper.instance().fetchPeople()
      expect(categoryFetchSpy).toHaveBeenCalledTimes(1);
    })
  
    it('Should fetch planets', () => {
      wrapper.instance().fetchPlanets()
      expect(categoryFetchSpy).toHaveBeenCalledTimes(1);
    })

  })

  

})




