import styled from '@emotion/styled'
import { Box, Image } from '@chakra-ui/react'

const HeaderBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`

export default function Header() {
  return (
    <HeaderBox>
      <Box
        display="inherit"
        flexDirection="inherit"
        alignItems="inherit"
        justifyContent="inherit"
      >
        <Image
          src={'/images/logo.png'}
          alt={'Sound Me Logo'}
          width={{ base: '100%', md: '60%', lg: '70%' }}
        />
      </Box>
    </HeaderBox>
  )
}
