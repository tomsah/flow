import shop from '../api/shop'
import * as types from './ActionTypes'
import { toggleShoppingBag } from './shoppingBagAction'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts().then(products => {
    dispatch(receiveProducts(products))
  })
}

export const addToBagAction = (product, quantity ) => ({
  type: types.ADD_TO_BAG,
  product,
  quantity
})

// export const bagCountAction = quantity => ({
//   type: types.INCREMENT_BAG_COUNT,
//   quantity
// })



export const addToBag =  (product, quantity )  => (dispatch) => {
  // dispatch(bagCountAction(quantity))
  dispatch(addToBagAction(product, quantity))
  dispatch(toggleShoppingBag())

  // if(getState().products.byId[product.id].inventory > 0) {
  //   // how to dispatch multiple action at once
  //   // is it a better way to do that ????
  //
  // }
}