import { DownloadIcon } from '@chakra-ui/icons'
import { Box, Button, Image, Tooltip } from '@chakra-ui/react'
import ParagraphHeader from './ParagraphHeader'

export default function Events() {
  return (
    <Box>
      <Box>
        <ParagraphHeader>Eventet:</ParagraphHeader>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'center'}
        flexDir={'column'}
        alignItems={'center'}
      >
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          position={'relative'}
          flexDir={{ base: 'column', md: 'row', lg: 'row' }}
          p={{ base: '1rem', md: '1rem', lg: '1rem' }}
          w={{ base: '100%', md: '60%', lg: '50%' }}
          borderRadius={'lg'}
        >
          <Image
            src={'/images/sound_me_event_1.jpg'}
            alt={'Balance of Mind'}
            w={'100%'}
            borderRadius={{
              base: '10px 10px 0 0',
              md: '10px 0 0 10px',
              lg: '10px 0 0 10px'
            }}
            boxShadow={'0 0 0 5px rgba(190, 144, 73, .8)'}
          />
        </Box>
        <Tooltip label={'Sharko Eventet'} aria-label={'Shkarko Eventet'}>
          <Button
            as={'a'}
            href={'/docs/SoundMeEvents.pdf'}
            download={'/docs/SoundMeEvents.pdf'}
            background={'rgba(200, 161, 100, 0.25)'}
            _hover={{ background: 'rgba(255, 255, 255, 0.5)' }}
            border={'1px solid rgb(200, 161, 100)'}
            size={{ base: 'sm', md: 'md', lg: 'lg' }}
            className={'flex items-center justify-center mt-2'}
            padding={'0.5rem'}
          >
            <DownloadIcon name={'download'} className={'mr-2'} /> Shkarko
            Eventet
          </Button>
        </Tooltip>
      </Box>
    </Box>
  )
}
