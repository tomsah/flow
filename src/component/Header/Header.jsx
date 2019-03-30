import React, {Component } from 'react'
import { connect} from 'react-redux'
import ShoppingCartLogo from '../../images/shoppingCart-icon.svg'
import { toggleShoppingBag } from '../../actions/shoppingBagAction'
import { productsQuantity } from '../../reducer/shoppingBagReducer'

 class Header extends Component {
  render() {
    const { toggleShoppingBag, total } = this.props
    return (
      <div className='header'>
        <h1>Checkout flow</h1>
        <div className='header__shoppingCart'>
          <a href="#" onClick={toggleShoppingBag}>
            <img src={ShoppingCartLogo} alt=""/>
            <span className='foo'>{total}</span>
          </a>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  total: productsQuantity(state)
})

export default connect( mapStateToProps , {toggleShoppingBag})(Header)