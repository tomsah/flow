import React, { Component } from 'react'
import {connect} from 'react-redux'
import './_App.scss';
import Header from './Header/Header'
import ProductsPage from './ProductPage/ProductsPage'
import ShoppingBag from './ShoppingBag/ShoppingBag'
import { toggleShoppingBag } from '../actions/shoppingBagAction'
import { getAllProducts } from '../actions'

class App extends Component {
  componentDidMount () {
    this.props.getAllProducts()
  }

  render() {
    const {toggleShoppingBag} = this.props
    return (
      <div className='main-wrapper'>
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

export default connect( null, {toggleShoppingBag, getAllProducts})(App);
