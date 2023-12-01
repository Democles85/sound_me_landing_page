import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Layout from '../components/layouts/main'
import Fonts from '../lib/fonts'
import theme from '../lib/theme'
import '../styles/globals.css'
import GoogleAnalytics from '../util/google-analytics'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GoogleAnalytics />
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
