import React from 'react';
import { shallow } from 'enzyme';
import { PlanetsBtn, PeopleBtn, VehiclesBtn, ViewFavoritesBtn, FavoriteCardBtn } from '../../../components/Buttons/Buttons';

describe('Buttons', () => {

  const mockSetActive = jest.fn();
  afterEach(() => mockSetActive.mockClear());

  it('Planet Button: trigger setActive button on click', () => {
    const mockActiveBtn = 'planets';
    const wrapper = shallow( 
      < PlanetsBtn 
        setActive={ mockSetActive }
        activeBtn={ mockActiveBtn } /> 
    );
    wrapper.find('button').simulate('click');
    expect(mockSetActive).toHaveBeenCalledTimes(1);
  })

  it('People Button: trigger setActive button on click', () => {
    const mockActiveBtn = 'people';
    const wrapper = shallow( 
      < PeopleBtn 
        setActive={ mockSetActive }
        activeBtn={ mockActiveBtn } /> 
    );
    wrapper.find('button').simulate('click');
    expect(mockSetActive).toHaveBeenCalledTimes(1);
  })

  it('Vehicle Button: trigger setActive button on click', () => {
    const mockActiveBtn = 'vehicles';
    const wrapper = shallow( 
      < VehiclesBtn 
        setActive={ mockSetActive }
        activeBtn={ mockActiveBtn } /> 
    );
    wrapper.find('button').simulate('click');
    expect(mockSetActive).toHaveBeenCalledTimes(1);
  })

  describe('ViewFavorites Button:', () => {
    const mockActiveBtn = 'favorites';
    let mockFavoriteCount = 1;

    let wrapper = shallow( 
      < ViewFavoritesBtn 
        setActive={ mockSetActive }
        activeBtn={ mockActiveBtn }
        favoriteCount={ mockFavoriteCount }/>)

    it('Should match snapshot taken', () => {
      expect(wrapper).toMatchSnapshot();
    })

    it('Should trigger change category on click', () => {
      wrapper.find('button').simulate('click', () => {
        expect(mockSetActive).toHaveBeenCalledTimes(1);
      })
    })

    it('Should be disabled with favorite count set to 0', () => {
      mockFavoriteCount = 0;
      wrapper = shallow( 
        < ViewFavoritesBtn 
          setActive={ mockSetActive }
          activeBtn={ mockActiveBtn }
          favoriteCount={ mockFavoriteCount }/>)
      expect(wrapper).toMatchSnapshot();
    })
  })

  describe('Favorite Card Button', () => {
    const mockCard = { name: 'Luke Skywalker', id: 1 }
    const mockUpdateFavCount = jest.fn();
    const mockStoredCard = [ { name: 'Luke Skywalker', id: 1 } ];
    let saveCardSpy;
    let deleteCardSpy;
    let toggleFavoriteSpy;
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        < FavoriteCardBtn 
          card={ mockCard }
          updateFavoriteCount={ mockUpdateFavCount } />
      )
      localStorage.setItem('favorites', JSON.stringify(mockStoredCard))
      saveCardSpy = jest.spyOn(wrapper.instance(), 'saveCard');
      deleteCardSpy = jest.spyOn(wrapper.instance(), 'deleteCard');
      toggleFavoriteSpy = jest.spyOn(wrapper.instance(), 'toggleFavorite');
    })

    it('Should be disabled/enabled if active state is true/false', () => {
      expect(wrapper).toMatchSnapshot();
      wrapper.setState({ active: true })
      expect(wrapper).toMatchSnapshot();
    })

    it('Should set button active if already favorited', () => {
      wrapper.instance().componentDidMount();
      expect(wrapper.state().active).toEqual(true);
    })

    it('Should toggle favorite button', () => {
      
      wrapper.instance().toggleFavorite();
      expect(wrapper.state().active).toEqual(false);
      expect(deleteCardSpy).toHaveBeenCalledTimes(1);

      wrapper.instance().toggleFavorite();
      expect(wrapper.state().active).toEqual(true);
      expect(saveCardSpy).toHaveBeenCalledTimes(1);
    })

    it('Should togge favorite on button click', () => {
      wrapper.find('button').simulate('click', () => {
        expect(toggleFavoriteSpy).toHaveBeenCalledTimes(1);
      })
    })

  })

})
