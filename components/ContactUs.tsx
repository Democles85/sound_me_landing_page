import { Box, Button, Icon, Text } from '@chakra-ui/react'
import ParagraphHeader from './ParagraphHeader'
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'

export default function ContactUs() {
  return (
    <Box py={5}>
      <ParagraphHeader>Kontakti:</ParagraphHeader>

      <Box display={'flex'} flexDir={{ base: 'column', md: 'row', lg: 'row' }}>
        <Box px={{ base: 0, md: 2, lg: 4 }} py={{ base: 2, md: 0, lg: 0 }}>
          <a href="https://www.instagram.com/soundmeyouth/" target="__blank">
            <Button
              bg={'rgba(143, 152, 125, 0.3)'}
              color={'goblinGreen'}
              _hover={{ bg: 'oliveGreen', color: '#fff' }}
              _focus={{ boxShadow: 'none' }}
            >
              <Box display={'flex'}>
                <Box pr={1}>
                  <Icon as={AiOutlineInstagram} />
                </Box>
                <Box>
                  <Text>@soundmeyouth</Text>
                </Box>
              </Box>
            </Button>
          </a>
        </Box>

        <Box px={{ base: 0, md: 2, lg: 4 }} py={{ base: 2, md: 0, lg: 0 }}>
          <a
            href="https://www.facebook.com/Sound-Me-110440398473173/?ref=page_internal"
            target="__blank"
          >
            <Button
              bg={'rgba(143, 152, 125, 0.3)'}
              color={'goblinGreen'}
              _hover={{ bg: 'oliveGreen', color: '#fff' }}
              _focus={{ boxShadow: 'none' }}
            >
              <Box display={'flex'}>
                <Box pr={1}>
                  <Icon as={AiOutlineFacebook} />
                </Box>
                <Box>
                  <Text>@soundme</Text>
                </Box>
              </Box>
            </Button>
          </a>
        </Box>
      </Box>
    </Box>
  )
}
