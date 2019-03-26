import React, { Component } from 'react';
import { connect } from  'react-redux'
import Product from '../Product/Product'
import { getVisibleProducts } from '../../reducer/products'
import { addToBag } from '../../actions'

class ProductsPage extends Component {
  constructor (props) {
    super(props)
    this.itemPerRow = 2
  }

  chunkArray = (arr, numOfChunk) => {
    return arr.reduce((acc, curr, index, array) => {
      return !(index % numOfChunk) ? acc.concat([array.slice(index, index+numOfChunk)]) : acc
    }, [])
  }

  renderProductGrid = (products, addToBag) => {
    const productGrid = this.chunkArray(products, this.itemPerRow)
    return productGrid.map((productRow, index) =>
      <div className='row' key={index}>
        {
          productRow.map( product =>
            <div className='col' key={product.id}>
              <Product product={product} addToBag={addToBag}/>
            </div>
          )
        }
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>Product Page</h1>
        <div className='product-grid container-fluid'>
          {this.renderProductGrid(this.props.products, this.props.addToBag)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToBag }
)(ProductsPage)


