import React from 'react'
import {mountWithStore} from '../../../test/helpers'
import Product from '../Product'
import Image from '../../Image/Image'
import mockProduct from '../../../test/mock-products'

let wrapper

describe('@render', () => {
  const product = mockProduct[0]
  const mockAddToBag = jest.fn()
  wrapper = mountWithStore(<Product product={product} addToBag={mockAddToBag}/>)

  it('should display a product name', () =>{
    expect(wrapper.find('h3').text()).toMatch(product.name)
  })
  it('should display a product image', () => {
    expect(wrapper.find(Image).prop('ImageSrc')).toBe(product.img)
  })
  it('should display a product description', () => {
    expect(wrapper.find('.product__description > p').text()).toMatch(product.description)
  })
  it('should display a product price', () => {
    const productDescription = wrapper.find('.product__description')
    const price= `£${product.price}`
    expect(productDescription.find('.product__description__price').text()).toMatch(price)
  })
  it('should have a "add to bag" button', () => {
    expect(wrapper.find('button').length).toBe(1)
    wrapper.find('button').simulate('click')
    expect(mockAddToBag).toHaveBeenCalledTimes(1)
  })
})