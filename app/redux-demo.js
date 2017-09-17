import { createStore } from 'redux'

export default function() {

    //定义规则
    function reducer(state = 0, action) {
      switch(action.type) {
        case 'INCREATE':
          return state + 1;
        case 'DECREATE':
          return state - 1;
        default:
          return state;
      }
    }
    //定义store
    let store = createStore(reducer)

    store.subscribe(() => {
      console.log('11->' + store.getState())
    })
    store.subscribe(() => {
      console.log('22->' + store.getState())
    })
    //触发变化
    store.dispatch({type: 'INCREATE'})
    store.dispatch({type: 'DECREATE'})
    store.dispatch({type: 'ff'})
}