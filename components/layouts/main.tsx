import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Header from '../Header'
import Footer from '../Footer'

type Props = {
  children: JSX.Element
  router: any
}

export default function Main({ children }: Props) {
  return (
    <Box as={'main'}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Sound Me contact page." />
        <meta name="author" content="Sixhe Tartari" />
        <meta name="author" content="sixhe tartari" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:site_name" content="Sound Me Organization" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/preview.png" />

        <title>Sound Me</title>
      </Head>
      <Container
        maxW={'container.lg'}
        minH={'100vh'}
        fontFamily={'"Noto Sans Balinese", sans-serif'}
      >
        <Header />
        {children}
      </Container>
      <Footer />
    </Box>
  )
}
