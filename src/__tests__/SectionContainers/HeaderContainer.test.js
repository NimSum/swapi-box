import { shallow } from 'enzyme';
import React from 'react';
import { Header } from '../../SectionContainers/Header';

describe('Header', () => {
  
  const mockCategory = 'home';
  const mockCategory2 = 'people';

  it('Should match snapshot with conditional rendering of home', () => {
    let wrapper = shallow(< Header category={ mockCategory } />);

    expect(wrapper).toMatchSnapshot();
  })

  it('Should match snapshot with conditional rendering of category', () => {
    let wrapper = shallow(< Header category={ mockCategory2 } />);

    expect(wrapper).toMatchSnapshot();
  })

})