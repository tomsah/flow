import React, { Component } from 'react';
import { connect } from  'react-redux'
import { getVisibleProducts } from '../../reducer/products'

import './_product.scss'

 class Product extends Component {
  constructor (props) {
    super(props)
    this.itemPerRow = 2
  }

   chunkArray = (arr, numOfChunk) => {
     return arr.reduce((acc, curr, index, array) => {
        return !(index % numOfChunk) ? acc.concat([array.slice(index, index+numOfChunk)]) : acc
     }, [])
   }

  renderProductGrid = (products) => {
    // console.log(products, this.props.products)
    const productGrid = this.chunkArray(products, this.itemPerRow)
    return productGrid.map((productRow, index) =>
      <div className='row' key={index}>
        {
          productRow.map( product =>
            <div className='col' key={product.id}>
               <div className='product'>
                  <h3 className='product__name'>{product.name}</h3>
                 <div className='product__image'>
                   <img src={require(`../../images/${product.img}.jpg`)} alt=""/>
                 </div>
                  <div className='product__description'>
                    <p>{product.description}</p>
                    <span className='product__description__price'>{`£${product.price}`} </span>
                  </div>

                 <button> Add to cart</button>
              </div>
            </div>
          )
        }
      </div>
    )
  }

   render() {
    return (
      <div className='product-grid container-fluid'>
        {this.renderProductGrid(this.props.products)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps
)(Product)

