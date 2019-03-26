import { combineReducers } from 'redux'
import { OPEN_SHOPPING_BAG, CLOSE_SHOPPING_BAG, ADD_TO_BAG, INCREMENT_BAG_COUNT } from '../actions/ActionTypes'

const shoppingBagOpenInitialState = false
const shoppingBagOpen = (state = shoppingBagOpenInitialState , action) => {
  switch(action.type) {
    case OPEN_SHOPPING_BAG:
      return true
    case CLOSE_SHOPPING_BAG:
      return false
    default:
      return state
  }
}

const shoppingBagProductInitialState = {}
const shoppingBagProduct = (state = shoppingBagProductInitialState,  action) => {
  switch (action.type) {
    case ADD_TO_BAG:
      const existingProduct = state[action.product.id]
      if (existingProduct){
        // only increase the quantity fields
        return { ...state,
          [action.product.id] : {
            ...existingProduct, quantity: existingProduct.quantity + 1
          }
        }
      } else {
        // add the
        return {
          ...state,
          [action.product.id]: {
            [`product${action.product.id}`] : action.product,
            quantity: 1
          }
        }
      }
    default:
      return state
  }
}

export default combineReducers({
    shoppingBagOpen,
    shoppingBagProduct
})

export const productsQuantity = (state) => {
  const products = state.shoppingBag.shoppingBagProduct
  let productsQuantity = 0
  for( let item in products) {
    productsQuantity = productsQuantity + products[item].quantity
  }
  return productsQuantity
}

export const total = state => {
  const products = state.shoppingBag.shoppingBagProduct
  let total = 0
  for( let item in products) {
    total = total + (products[item][`product${item}`].price * products[item].quantity)
  }
  return total
}

export const isShoppingBAgOpen = state => state.shoppingBagOpen

export const getShoppingBagProduct = state => state.shoppingBagProduct