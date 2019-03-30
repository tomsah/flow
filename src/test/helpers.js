import React from 'react'
import {mount} from 'enzyme'
import configureStore from '../configureStore'
import { Provider } from 'react-redux'
import { getAllProducts } from '../actions'


export const mountWithStore = (component) => {
 const store = configureStore()
        store.dispatch(getAllProducts())
 return  mount(
   <Provider store={store} >
     {component}
   </Provider>
 )
}