import { motion } from 'framer-motion'
import Head from 'next/head'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 0, y: 20, transition: { duration: 0.5 } }
}

type Props = {
  children: JSX.Element
  title: string
}

const Layout = ({ children, title }: Props) => (
  <motion.div
    initial={'hidden'}
    animate={'enter'}
    exit={'exit'}
    variants={variants}
    transition={{ duration: 0.5, type: 'easeInOut' }}
    style={{ position: 'relative' }}
  >
    <>
      {title && (
        <Head>
          <title>{title} - Sound Me</title>
          <meta name="description" content={title} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={title} />
          <meta name="og:title" content={title} />
          <meta name="og:description" content={title} />
        </Head>
      )}
      {children}
    </>
  </motion.div>
)

export default Layout
