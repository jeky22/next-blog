import '../styles/globals.css'
import Timehistory from './src/components/Timehistory'
import Cards from './src/components/Cards'

function MyApp({ Component, pageProps }) {
  return (
    <span>
      <Component {...pageProps} />
      <Timehistory />
      <Cards />
    </span>
  )
}

export default MyApp
