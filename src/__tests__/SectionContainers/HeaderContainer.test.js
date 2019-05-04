import { shallow } from 'enzyme';
import React from 'react';
import { Header } from '../../SectionContainers/Header';

describe('Header', () => {
  
  it('Should match snapshot', () => {
    let wrapper = shallow(< Header />);

    expect(wrapper).toMatchSnapshot();
  })

})