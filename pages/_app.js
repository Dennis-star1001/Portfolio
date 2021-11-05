import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../Components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Layout>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
      </Layout>
    </>

  )
}

export default MyApp
