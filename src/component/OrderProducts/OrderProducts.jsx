import React from 'react';
import Image from '../Image/Image'

const OrderProduct = ({ product, quantity }) =>{
  return (
    <div className='orderProduct' key={product.id}>
      <div className="row">
        <div className="col-6">
          <div className='orderProduct__image'>
            <Image ImageSrc={product.img} />
          </div>
        </div>
        <div className="col-6">
          <div className='orderProduct__description '>
            <div className='orderProduct__description__name'>
              <p>{product.name}</p>
            </div>
            <div className="orderProduct__description__quantity">
              <span>quantity:</span>  {quantity}
            </div>
            <div className='orderProduct__description__total-price'>
              <span> {`Total price £${product.price * quantity} `}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default OrderProduct

