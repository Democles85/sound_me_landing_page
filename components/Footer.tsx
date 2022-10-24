import { Box, Container, Image, Text } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Container maxW={'100%'} bg={'rgba(143, 152, 125, 0.3)'}>
      <Box padding={'2rem'}>
        <Box display={'flex'} alignItems={'center'} flexDir={'column'}>
          <Box pt={2} w={{ base: '100%', md: '100%', lg: '50%' }}>
            <Text fontSize={'md'} textAlign={'center'} fontStyle={'italic'}>
              “Ky projekt/aktivitet organizohet në kuadër të programit{' '}
              <b>Tirana Kryeqyteti Evropian i Rinisë 2022</b> me mbështetjen
              financiare të Kongresit Rinor Kombëtar në bashkëpunim me Bashkinë
              Tiranë”.
            </Text>
          </Box>
          <Box pt={2} w={{ base: '100%', md: '100%', lg: '60%' }}>
            <Text fontSize={'sm'} textAlign={'center'}>
              “Ky botim/material/raport/video është realizuar në kuadër të
              programit <b>Tirana Kryeqyteti Evropian i Rinisë 2022</b> me
              mbështetjen financiare të Kongresit Rinor Kombëtar në bashkëpunim
              me Bashkinë Tiranë. Përmbajtja e këtij
              botimi/materiali/raporti/video është përgjegjësi e organizatorit
              dhe në asnjë mënyrë nuk mund të konsiderohet si qëndrim i
              Kongresit Rinor Kombëtar apo Bashkisë Tiranë”
            </Text>
            <Box>
              <Image
                src={'/images/logo_e_zeze.png'}
                alt={'Logo e Tirana Kryeqyteti Evropian i Rinisë 2022'}
              />
            </Box>
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
