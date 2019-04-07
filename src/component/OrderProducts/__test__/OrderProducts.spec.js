import React from 'react'
import { shallow} from 'enzyme'
import OrderProduct from '../OrderProducts'
import Image from '../../Image/Image'
import mockProduct from '../../../test/mock-products'

describe('render', () => {
  const product = mockProduct[0]
  const quantity = 2
  const wrapper = shallow(<OrderProduct product={product} quantity={quantity}/>)
  const orderProduct = wrapper.find('.orderProduct')

  it('should render the orderProduct component', () => {
    expect(orderProduct.length).toBe(1)
  })
  it('should have an Image component', () => {
    const image = orderProduct.find(Image)
    expect(image.length).toBe(1)
    expect(image.prop('ImageSrc')).toBe(product.img)
  })
  it('should display the product name',() => {
    const productName = orderProduct.find('.orderProduct__description__name > p')
    expect(productName.text()).toMatch(product.name)
  })

  it('should display the quantity', () => {
    const productQuantity = orderProduct.find('.orderProduct__description__quantity')
    expect(productQuantity.text()).toMatch(`quantity: ${quantity}`)
  })

  it('should display the product total price ordered', () => {
    const productTotalPrice = orderProduct.find('.orderProduct__description__total-price > span')
    const priceTotal = product.price * quantity
    expect(productTotalPrice.text()).toMatch(`Total price £${priceTotal}`)
  })
})
