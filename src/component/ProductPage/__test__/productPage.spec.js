import React from 'react'
import {mountWithStore} from '../../../test/helpers'
import ProductsPage from '../ProductsPage'
import mockProduct from '../../../test/mock-products'

let wrapper

describe('@render', () => {
  wrapper =  mountWithStore(<ProductsPage.WrappedComponent products={mockProduct}/>)

  it('should have a title', () => {
    expect(wrapper.find('h1').length).toBe(1)
  })

  it('should display the correct amount of row', () => {
      expect(wrapper.find('.row').length).toBe(2)
  })

  it('should display 2 products by row', () => {
    const rows = wrapper.find('.row')
    rows.forEach(node => {
      expect(node.children().length).toBe(2)
    })
  })
})