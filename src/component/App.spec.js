import React from 'react';
import App from './App';
import {mountWithStore} from '../test/helpers'

let wrapper

describe('@render App', () => {
  beforeEach(() => {
    wrapper = mountWithStore(<App/>)
  })

  it('should render a main-wrapper div and its child component', () =>{
    expect(wrapper.find('.main-wrapper').length).toEqual(1)
    expect(wrapper.find('.main').length).toEqual(1)
    expect(wrapper.find('Header').length).toEqual(1)
    expect(wrapper.find('ProductsPage').length).toEqual(1)
  })

  it('should render the shoppingBag component and not be visible', () => {
    expect(wrapper.find('ShoppingBag').length).toEqual(1)
    expect(wrapper.contains('ShoppingBag')).toBe(false)
  })

  it('should render the overlay div but not being visible', () => {
    expect(wrapper.find('.overlay').length).toEqual(1)
    expect(wrapper.contains('ShoppingBag')).toBe(false)
  })
})