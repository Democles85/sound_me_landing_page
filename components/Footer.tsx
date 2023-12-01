import { Box, Container, Text } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Container maxW={'100%'} bg={'rgba(143, 152, 125, 0.3)'}>
      <Box padding={'2rem'}>
        <Box display={'flex'} alignItems={'center'} flexDir={'column'}>
          <Box pt={2} w={{ base: '100%', md: '100%', lg: '60%' }}>
            <Text fontSize={'md'} textAlign={'center'} fontStyle={'italic'}>
              Sound Me është një Komunitet Holistik që mbështet të rijntë{' '}
              <b>Falas</b>. Eventet mbeshteten nga Individ, Donator, Organizata,
              Biznese, etj.
            </Text>
          </Box>
        </Box>
        <Box
          display={'flex'}
          flexDir={'column'}
          textAlign={'center'}
          opacity={'0.5'}
          fontSize={'sm'}
          pt={'3rem'}
        >
          <Text>{new Date().getFullYear()} &copy; Sound Me</Text>
          <Text>All rights reserved.</Text>
        </Box>
      </Box>
    </Container>
  )
}
