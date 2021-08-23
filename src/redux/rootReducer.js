import { combineReducers } from 'redux'
import headerItems, { initialState as headerInitialState } from './modules/headerItems'
import page1, { initialState as page1InitialState } from './modules/page1'
import page2, { initialState as page2InitialState } from './modules/page2'

const rootReducer = combineReducers({
  headerItems,
  page1,
  page2
})

export const initialState = {
  headerItems: headerInitialState,
  page1: page1InitialState,
  page2: page2InitialState
}

export default rootReducer
