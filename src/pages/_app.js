import React from 'react'
import { Provider } from 'react-redux';
import { withReduxStore } from '@/redux/store';

import GlobalHeader from '@/components/GlobalHeader'
import MaxWidth from '@/components/MaxWidth'

import '../styles/globals.css'

function MyApp({ Component, pageProps, reduxStore }) {
  return (
    <Provider store={reduxStore}>
      <MaxWidth>
        <GlobalHeader />
      </MaxWidth>
      <div className="bg-blue-50 min-h-screen">
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return { ...pageProps }
}

export default withReduxStore(MyApp)
