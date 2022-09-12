import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ParagraphHeader from './ParagraphHeader'

const responsive: Record<string, any> = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1
  }
}

export default function Events() {
  const customLeftArrow = (
    <Box
      position={'absolute'}
      left={0}
      cursor={'pointer'}
      bg={'rgba(143, 152, 125, 0.6)'}
      border={'2px solid rgba(255, 255, 255, 0.5)'}
      p={3}
      rounded={'full'}
      className={'arrow-btn'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // className="h-6 text-white w-full"
        style={{ color: '#fff', width: 'full', fontVariant: 'h6' }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </Box>
  )

  const customRightArrow = (
    <Box
      position={'absolute'}
      right={'0'}
      cursor={'pointer'}
      bg={'rgba(143, 152, 125, 0.6)'}
      border={'2px solid rgba(255, 255, 255, 0.5)'}
      p={3}
      rounded={'full'}
      className={'arrow-btn'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // className="h-6 text-white w-full"
        style={{ color: '#fff', width: 'full', fontVariant: 'h6' }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </Box>
  )

  return (
    <Box>
      <ParagraphHeader>Evente: </ParagraphHeader>
      <Box mb={'2rem'}>
        <Carousel
          infinite
          customLeftArrow={customLeftArrow}
          customRightArrow={customRightArrow}
          responsive={responsive}
          itemClass={'carousel-px4'}
        >
          <Box h={'560px'} w={'100%'} bg={'red'} borderRadius={'lg'} p={'2rem'}>
            <Text>Event One</Text>
          </Box>
        </Carousel>
      </Box>
    </Box>
  )
}
