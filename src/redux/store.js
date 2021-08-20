import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createWrapper } from "next-redux-wrapper"
import thunk from 'redux-thunk'

import rootReducer, { initialState } from './rootReducer'

const makeStore = () => createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  )

export const wrapper = createWrapper(makeStore)

const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'


function getOrCreateStore() {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return makeStore()
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = makeStore()
  }
  return window[__NEXT_REDUX_STORE__]
}


export const withReduxStore = App =>
  class AppWithRedux extends React.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore()

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore

      let appProps = {}
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext)
      }
      return {
        ...appProps,
        initialReduxState: reduxStore,
      }
    }

    constructor(props) {
      super(props)
      this.reduxStore = getOrCreateStore()
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />
    }
  }