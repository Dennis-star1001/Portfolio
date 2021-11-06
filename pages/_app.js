import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import Layout from '../Components/Layout'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <AnimatePresence exitBeforeEnter>
    <Layout>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
      </Layout>
      </AnimatePresence>
    </>

  )
}

export default MyApp
