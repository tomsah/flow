import { combineReducers } from 'redux'
import products from './products'
import shoppingBag from './shoppingBagReducer'

export default combineReducers({
  products,
  shoppingBag
})