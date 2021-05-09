import {combineReducers, createStore} from 'redux';
import nominationsReducer from './nominationsReducer';

// allow for data persistance when exiting or refreshing page
function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch(e) {
    console.log(e)
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch(e) {
    console.log(e)
    return undefined
  }
}

const allReducer = combineReducers({
  nominations: nominationsReducer,
});

const persistedState = loadFromLocalStorage()

const store = createStore(
  allReducer, 
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

store.subscribe(() => saveToLocalStorage(store.getState()))
export default store;
