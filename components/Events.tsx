import {
  Box,
  Text,
  Image,
  Button,
  useDisclosure,
  Icon,
  StatDownArrow,
  Fade,
  Collapse,
  Divider
} from '@chakra-ui/react'
import ParagraphHeader from './ParagraphHeader'

export default function Events() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Box>
        <ParagraphHeader>Eventet:</ParagraphHeader>
      </Box>
      <Box
        display={'flex'}
        flexDir={{ base: 'column', md: 'row', lg: 'row' }}
        bg={'rgba(143, 152, 125, 0.3)'}
        p={{ base: '1rem', md: '1rem', lg: '1rem' }}
        borderRadius={'lg'}
      >
        <Image
          src={'/images/balance_of_mind.png'}
          alt={'Balance of Mind'}
          w={{ base: '100%', md: '100%', lg: '30%' }}
          borderRadius={{
            base: '10px 10px 0 0',
            md: '10px 0 0 10px',
            lg: '10px 0 0 10px'
          }}
          boxShadow={'3px 3px 0 0 rgba(143, 152, 125, 0.8)'}
        />

        <Box
          pl={{ base: '1rem', md: '3rem', lg: '3rem' }}
          w={{ base: '95%', md: '100%', lg: '80%' }}
          display={'flex'}
          flexDir={'column'}
          mt={{ base: '1rem', md: '0', lg: '0' }}
        >
          <Text
            fontWeight={'bold'}
            fontSize={{ base: '1.2rem', md: '1.4rem', lg: '1.625rem' }}
            color={'#393e41'}
          >
            THE BALANCE OF YOUR MIND -{' '}
            <span
              style={{
                fontStyle: 'italic',
                // textDecoration: 'underline',
                fontWeight: '500'
              }}
            >
              Live Event
            </span>
          </Text>
          <Box pr={{ base: '0', md: '0', lg: '3rem' }}>
            <Divider style={{ border: '2px solid #393e41' }} my={2} />
          </Box>
          <Box
            fontSize={{ base: '1rem', md: '1.2rem', lg: '1.2rem' }}
            my={{ base: '1rem', md: '0', lg: '0' }}
          >
            <Text>Coming Soon... </Text>
          </Box>
          <Box
            fontSize={{ base: '1rem', md: '1.2rem', lg: '1.2rem' }}
            my={{ base: '1rem', md: '0', lg: '0' }}
            display={'flex'}
            h={'100%'}
            justifyContent={'flex-end'}
          >
            <Text alignSelf={'end'}>
              <a>Location: Rruga Abdyl Frashëri, Tiranë</a>
            </Text>
          </Box>
        </Box>
      </Box>
      {/* <Divider style={{ borderColor: '#000' }} mt={'1rem'} /> */}
    </Box>
  )
}
