import React, { useEffect } from 'react'
import { Provider } from 'react-redux';
import { withReduxStore } from '@/redux/store';

import Head from 'next/head';
import GlobalHeader from '@/components/GlobalHeader'
import MaxWidth from '@/components/MaxWidth'

import '../styles/globals.css'

function MyApp({ Component, pageProps, reduxStore }) {

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&family=Roboto:wght@700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <Provider store={reduxStore}>
        <MaxWidth>
          <GlobalHeader />
        </MaxWidth>
        <div className="bg-indigo-50 min-h-screen font-roboto-bold">
          <Component {...pageProps} />
        </div>
      </Provider>
    </>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return { ...pageProps }
}

export default withReduxStore(MyApp)
