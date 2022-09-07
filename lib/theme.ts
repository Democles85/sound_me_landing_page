import { extendTheme } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: StyleFunctionProps | Record<string, any>) => ({
    body: {
      bg: mode('#f0e6d1', '#1a202c')(props)
    }
  })
}

const colors = {
  marbleWhite: '#f0e6d1',
  goblinGreen: '#3e503c',
  oliveGreen: '#8f987d'
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({
  styles,
  colors,
  config
})

export default theme
