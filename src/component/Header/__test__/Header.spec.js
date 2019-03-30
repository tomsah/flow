import React from 'react'
import Header from '../Header'
import {mountWithStore} from '../../../test/helpers'

let wrapper

describe('@render',() => {
   wrapper = mountWithStore(<Header />)
    it('should display the title', () => {
      expect(wrapper.find('h1').length).toEqual(1)
    })
    it('should display the shopping bag icon', () => {
      expect(wrapper.find('.header__shoppingCart').length).toEqual(1)
    })
})

describe('shopping bag icon', () => {
  const shoppingBagButton  = wrapper.find('.header__shoppingCart')
  it('should display 0', () => {
    expect(shoppingBagButton.find('span').text()).toEqual("0")
  })
})