import React, { Component } from 'react'

import './_App.scss';
import Header from './Header/Header'
import ProductsPage from './ProductPage/ProductsPage'

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <ProductsPage />
      </div>
    );
  }
}

export default App;
