import Header from '../Components/Common/Header'
import '../styles/globals.css'
import Head from 'next/head'
import SearchProduct from '../Components/Common/SearchProduct'
function MyApp({ Component, pageProps }) {
  return <>
  <Head>
        <title>Chinaonlinebd | Your Trusted Wholesale Patner-Chinaonlinebd</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  <Header></Header>
  
  <Component {...pageProps} />
  </>
}

export default MyApp
