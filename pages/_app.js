import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../Components/Layout'


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
