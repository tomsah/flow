import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

describe('@render', () => {
  it('should render a main-wrapper div', () =>{
    const wrapper = mount(<App />)
    // expect(wrapper.contains(welcome)).toBe(true);
    expect(wrapper.find('.main-wrapper'))
  })
})