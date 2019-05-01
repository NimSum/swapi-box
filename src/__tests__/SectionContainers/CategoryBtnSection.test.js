import React from 'react';
import { shallow } from 'enzyme';
import CategoryBtnSection from '../../SectionContainers/CategoryBtnSection';

describe('Category Button Section', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      < CategoryBtnSection />
    );
  });

  const mockEvent = {
    target: { name: "people"}
  }

  it('Should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('Should set state active button', () => {
    expect(wrapper.state().activeBtn).toEqual('');
    wrapper.instance().setActiveBtn(mockEvent);
    expect(wrapper.state().activeBtn).toEqual('people');
  })

})