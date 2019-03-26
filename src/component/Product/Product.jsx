import React from 'react';
import Image from  '../Image/Image'

 const Product = ({ product, addToBag }) =>{
   let quantity = 1
    return (
     <div className='product'>
        <h3 className='product__name'>{product.name}</h3>
       <Image ImageSrc={product.img} />
        <div className='product__description'>
          <p>{product.description}</p>
          <span className='product__description__price'>{`£${product.price}`} </span>
        </div>

       <button onClick={() => addToBag(product, quantity)}> Add to cart</button>
    </div>
    );

}

export default Product

