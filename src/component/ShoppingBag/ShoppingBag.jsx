import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { toggleShoppingBag } from '../../actions/shoppingBagAction'
import { isShoppingBAgOpen, getShoppingBagProduct, productsQuantity, total } from '../../reducer/shoppingBagReducer'
import { getVisibleProducts } from '../../reducer/products'
import OrderProducts from '../OrderProducts/OrderProducts'
import PromotionCode from '../PromoCode/PromotionCode'
import CLoseIcon from '../../images/close-icon.svg'

class ShoppingBag extends Component {

  displayShoppingBagProduct = () => {
    const {addedProduct} = this.props
    if (addedProduct) {
     return Object.keys(addedProduct).map((key ) => {
        return <OrderProducts product={addedProduct[key][`product${key}`]} key={addedProduct[key][`product${key}`].id} quantity={addedProduct[key].quantity} />
      })
    }
  }

  render() {
    const { shoppingBagOpen, toggleShoppingBag, productsQuantity, total } = this.props
    return (
      <div className={`ShoppingBag ${ shoppingBagOpen ? 'is-open' : '' }`}>
        <div className="ShoppingBag__header">
          <h3>My bag ({productsQuantity})</h3>
          <button onClick={toggleShoppingBag}  className='Button--default ShoppingBag__closeButton' >
            <img src={CLoseIcon} alt=""/>
          </button>
          <div className='col'>
            <button className='Button--default Button__submit'> Checkout </button>
          </div>
        </div>

        <div className="ShoppingBag__Order-container">
          {this.displayShoppingBagProduct()}
        </div>

        <div className='ShoppingBag__promotionCode'>
          <PromotionCode />
        </div>
        <div className='ShoppingBag__total'>
          <span className='bold-text'>your total is:</span>{`£${total}`}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  shoppingBagOpen: isShoppingBAgOpen(state.shoppingBag),
  addedProduct: getShoppingBagProduct(state.shoppingBag),
  products: getVisibleProducts(state.products),
  productsQuantity: productsQuantity(state),
  total: total(state)
})

export default connect( mapStateToProps, { toggleShoppingBag })(ShoppingBag)