import React from 'react';
import { shallow } from 'enzyme';
import { PlanetsBtn, PeopleBtn, VehiclesBtn } from '../../Buttons/Buttons';

describe('Category Buttons', () => {
  const mockSetActive = jest.fn();

  it('Planet Button: trigger setActive button on click', () => {
    const component = shallow( 
      < PlanetsBtn 
        setActive={ mockSetActive }/> 
    );
    component.find('button').simulate('click');
    expect(mockSetActive).toHaveBeenCalled();
  })

  it('People Button: trigger setActive button on click', () => {
    const component = shallow( 
      < PeopleBtn 
        setActive={ mockSetActive }/> 
    );
    component.find('button').simulate('click');
    expect(mockSetActive).toHaveBeenCalled();
  })

  it('Vehicle Button: trigger setActive button on click', () => {
    const component = shallow( 
      < VehiclesBtn 
        setActive={ mockSetActive }/> 
    );
    component.find('button').simulate('click');
    expect(mockSetActive).toHaveBeenCalled();
  })
})
