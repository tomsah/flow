import { createStore,  applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducer/rootReducer'
import { getAllProducts } from './actions'


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)

store.dispatch(getAllProducts())

export default function configureStore(initialState={store}) {
  return store
}