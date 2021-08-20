import { combineReducers } from 'redux'
import headerItems, { initialState as headerInitialState } from './modules/headerItems'
import page1, { initialState as page1InitialState } from './modules/page1'

const rootReducer = combineReducers({
  headerItems,
  page1
})

export const initialState = {
  headerInitialState,
  page1InitialState
}

export default rootReducer
