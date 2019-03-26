import React, { Component } from 'react'
import {connect} from 'react-redux'
import './_App.scss';
import Header from './Header/Header'
import ProductsPage from './ProductPage/ProductsPage'
import ShoppingBag from './ShoppingBag/ShoppingBag'
import { toggleShoppingBag } from '../actions/shoppingBagAction'

class App extends Component {
  render() {
    const {toggleShoppingBag} = this.props
    return (
      <div>
        <div className='main'>
          <Header />
          <ProductsPage />
        </div>
        <ShoppingBag />
        <div className='overlay is-hidden' onClick={toggleShoppingBag}/>
      </div>
    );
  }
}

export default connect( null, {toggleShoppingBag})(App);
