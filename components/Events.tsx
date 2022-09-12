import { Box, Text, Image } from '@chakra-ui/react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ParagraphHeader from './ParagraphHeader'

export default function Events() {
  return (
    <Box>
      <Box>
        <ParagraphHeader>Evente:</ParagraphHeader>
      </Box>
      <Box>
        <Image
          src={'/images/balance_of_mind.png'}
          alt={'Balance of Mind'}
          w={'20%'}
          className={'event-image'}
        />
      </Box>
    </Box>
  )
}
