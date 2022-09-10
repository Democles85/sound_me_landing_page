import { Box, Container, Text } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Container maxW={'100%'}>
      <Box align={'center'} opacity={'0.5'} fontSize={'sm'}>
        <Text>{new Date().getFullYear()} &copy; Sound Me</Text>
        <Text>All rights reserved.</Text>
      </Box>
    </Container>
  )
}
