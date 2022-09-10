import { Box, Button, Icon, Link, Text } from '@chakra-ui/react'
import ParagraphHeader from './ParagraphHeader'
import { AiFillInstagram } from 'react-icons/ai'
import { MdMail, MdFacebook } from 'react-icons/md'

export default function ContactUs() {
  return (
    <Box pt={5} pb={'3rem'}>
      <ParagraphHeader>Kontakti:</ParagraphHeader>

      <Box display={'flex'} flexDir={{ base: 'column', md: 'row', lg: 'row' }}>
        <Box px={{ base: 0, md: 2, lg: 4 }} py={{ base: 2, md: 0, lg: 0 }}>
          <a href="https://www.instagram.com/soundmeyouth/" target="__blank">
            <Button
              bg={'rgba(143, 152, 125, 0.3)'}
              color={'goblinGreen'}
              _hover={{ bg: 'oliveGreen', color: '#fff' }}
              _focus={{ boxShadow: 'none' }}
              leftIcon={<Icon as={AiFillInstagram} />}
            >
              @soundmeyouth
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
              leftIcon={<Icon as={MdFacebook} />}
            >
              @soundme
            </Button>
          </a>
        </Box>

        <Box px={{ base: 0, md: 2, lg: 4 }} py={{ base: 2, md: 0, lg: 0 }}>
          <Link href="mailto:soundme01@gmail.com" target="_blank">
            <Button
              bg={'rgba(143, 152, 125, 0.3)'}
              color={'goblinGreen'}
              _hover={{ bg: 'oliveGreen', color: '#fff' }}
              _focus={{ boxShadow: 'none' }}
              leftIcon={<Icon as={MdMail} />}
            >
              @soundmegmail
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
