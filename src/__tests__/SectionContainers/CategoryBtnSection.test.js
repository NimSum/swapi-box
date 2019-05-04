import React from 'react';
import { shallow } from 'enzyme';
import { CategoryBtnSection } from '../../SectionContainers/CategoryBtnSection';

describe('Category Button Section', () => {
  const mockChangeCategory = jest.fn();
  const mockFavoriteCount = 1;
  const mockUpdateFavCount = jest.fn();
  const mockEvent = {
    target: { name: "people"}
  }

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      < CategoryBtnSection 
        changeCategory={ mockChangeCategory }
        favoriteCount={ mockFavoriteCount }
        mockUpdateFavCount={ mockUpdateFavCount }
      />
    );
  });

  it('Should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('Should set state active button', () => {
    expect(wrapper.state().activeBtn).toEqual('');
    wrapper.instance().setActiveBtn(mockEvent);
    expect(wrapper.state().activeBtn).toEqual('people');
  })

})