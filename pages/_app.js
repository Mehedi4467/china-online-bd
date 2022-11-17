import Header from '../Components/Common/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Header></Header>
  <Component {...pageProps} />
  </>
}

export default MyApp
