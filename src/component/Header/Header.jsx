import React from 'react'
import ShoppingCartLogo from '../../images/shoppingCart-icon.svg'
import './_header.scss'

function Header () {
  return <div className='header'>
    <h1>Checkout flow</h1>
    <div className='header__shoppingCart'>
      <img src={ShoppingCartLogo} alt=""/>
    </div>
  </div>
}

export default Header