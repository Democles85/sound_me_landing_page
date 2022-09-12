import {
  Box,
  Text,
  Image,
  Button,
  useDisclosure,
  Icon,
  StatDownArrow,
  Fade,
  Collapse
} from '@chakra-ui/react'
import ParagraphHeader from './ParagraphHeader'

export default function Events() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Box>
        <ParagraphHeader>Evente:</ParagraphHeader>
      </Box>
      <Box>
        <Box>
          <Image
            src={'/images/balance_of_mind.png'}
            alt={'Balance of Mind'}
            w={{ base: '100%', md: '100%', lg: '30%' }}
            className={'event-image'}
            onClick={onToggle}
            _hover={{ cursor: 'pointer' }}
          />
        </Box>

        <Button
          display={{ base: 'block', md: 'none', lg: 'none' }}
          position={'relative'}
          top={'-15px'}
          left={'44%'}
          bg={'oliveGreen'}
          color={'goblinGreen'}
          _hover={{ bg: 'goblinGreen', color: '#fff' }}
          _focus={{ boxShadow: 'none' }}
          onClick={onToggle}
        >
          <Icon as={StatDownArrow} />
        </Button>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="oliveGreen"
            rounded="md"
            shadow="md"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            dignissimos natus cumque laboriosam aliquam autem, enim ea deleniti
            saepe culpa illo id excepturi voluptatem aut magni earum? Autem,
            aliquam aperiam.
          </Box>
        </Collapse>
      </Box>
    </Box>
  )
}
