import { createStore } from 'redux'
import {rootReucer} from '../reducers/index'

export default function configureStore(state) {
  let store = createStore(rootReucer, state,
    window.devToolsExtension ? window.devToolsExtension() : undefined
    );
  return store
}