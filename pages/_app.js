import '../styles/fonts/SeoulHangangJungM/seoul-hangang-jung-m.css'
import '../styles/globals.css'
import '../styles/test.css'
import 'animate.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (
    <span>
      <Component {...pageProps} />,
    </span>
  )
}

export default MyApp
