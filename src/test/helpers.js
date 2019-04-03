import React from 'react'
import {mount} from 'enzyme'
import configureStore from '../configureStore'
import { Provider } from 'react-redux'

export const mountWithStore =  (component) => {
  const store = configureStore()

  return  mount(
    <Provider store={store} >
      {component}
    </Provider>
  )
}