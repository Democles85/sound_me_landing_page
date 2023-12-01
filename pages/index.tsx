import { DownloadIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Icon,
  ListItem,
  Text,
  Tooltip,
  UnorderedList
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { AiFillDollarCircle } from 'react-icons/ai'
import { MdMoney } from 'react-icons/md'
import {
  ContactUs,
  Events,
  FindUs,
  Paragraph,
  ParagraphHeader,
  RegisterForm
} from '../components'

const Home: NextPage = () => {
  const pdfSrc = '/docs/PasaportaEnergjitike.pdf'

  return (
    <Box>
      <Box pb={'2rem'}>
        <ParagraphHeader>Kush jemi?</ParagraphHeader>
        <Paragraph>
          Sound Me është themeluar nga Pëllumb Mukaj ~Colombo, si një hapësirë
          autentike ku të gjithë të rijntë të suportohen dhe mbështeten në
          rrugetimin e tyre <b>FALAS</b>.
        </Paragraph>
      </Box>
      <Box pb={'2rem'}>
        <ParagraphHeader>Synimi ynë?</ParagraphHeader>
        <Paragraph>
          Kjo lëvizje ka për synim krijimin e një komuniteti që mbështet të
          rinjtë drejt zhvillimit për të mësuar, praktikuar, trasformuar dhe
          zgjeruar vetëveten përmes praktikave holistike. Në fokus do të jetë
          shëndeti mendor nga një pikëpamje holistike, si një mënyrë që ndihmon
          për të dalë nga kaosi i brendshëm.
        </Paragraph>

        <Box>
          <Text as={'h2'} fontSize={'1.2rem'} pt={'1rem'} fontWeight={500}>
            Ne do të integrojmë :
          </Text>
          <UnorderedList
            px={'3rem'}
            fontSize={'1.2rem'}
            className="grid grid-cols-1 md:grid-cols-2 justify-center items-center"
          >
            <ListItem>Conscious People</ListItem>
            <ListItem>Meditation</ListItem>
            <ListItem>Breathwork (Somatic Breathwork)</ListItem>
            <ListItem>Sound Healing</ListItem>
            <ListItem>Shadow Work</ListItem>
            <ListItem>Duality & Non Duality</ListItem>
            <ListItem>Feminine & Masculine Polarity</ListItem>
            <ListItem>Emotional Detox</ListItem>
            <ListItem>Release Thoughts</ListItem>
            <ListItem>Trauma Release</ListItem>
            <ListItem>De-Armouring</ListItem>
            <ListItem>Reiki</ListItem>
            <ListItem>Energetic Bodywork</ListItem>
          </UnorderedList>
        </Box>
      </Box>

      <Box className="py-2">
        <ParagraphHeader>Pasaporta Energjitike: </ParagraphHeader>
        <Paragraph>
          Pasaportat janë krijuar nga themeluesi i <b>Sound Me</b>. Ato janë
          dizenjuara si një pasqyrë që ju ti përdorni në jetën tuaj.
        </Paragraph>
        {/* <Box className="relative py-4">
          <Tooltip
            label={'Shkarko Pasaporten Energjitike'}
            aria-label={'Shkarko Pasaporten Energjitike'}
          >
            <Button
              as={'a'}
              href={pdfSrc}
              download={'sixhei_tartari_cv.pdf'}
              borderRadius={'full'}
              position={'absolute'}
              top={'-1rem'}
              right={'-1rem'}
              zIndex={1}
              size={{ base: 'sm', md: 'md', lg: 'lg' }}
              padding={'0.5rem'}
              height={'40px'}
              width={'40px'}
            >
              <DownloadIcon name={'download'} />
            </Button>
          </Tooltip>
          <iframe
            src={`${pdfSrc}#toolbar=0`}
            className="h-[400px] md:h-[700px]"
            style={{
              borderRadius: '10px',
              border: '2px solid',
              borderColor: 'olive',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              width: '1px',
              minWidth: '100%'
            }}
          />
        </Box> */}
        <Box className="flex md:flex-col items-center justify-around w-full">
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
            Pasaporten Energjitike
          </Button>

          <Button
            as={'a'}
            href={'https://paypal.me/soundmeyouth?country.x=AL&locale.x=en_US'}
            className={'flex items-center justify-center mt-2'}
            size={{ base: 'sm', md: 'md', lg: 'lg' }}
            border={'1px solid rgb(200, 161, 100)'}
            background={'rgba(255, 255, 255, 0.5)'}
            _hover={{ background: 'rgba(200, 161, 100, 0.25)' }}
            padding={'0.5rem'}
          >
            <Icon as={AiFillDollarCircle} className={'mr-2'} />
            Bej nje donacion
          </Button>
        </Box>
      </Box>

      <Box className="py-2">
        <Events />
      </Box>

      <Box>
        <ParagraphHeader>Regjistrohu:</ParagraphHeader>
        <RegisterForm />
        <FindUs />
        <ContactUs />
      </Box>
    </Box>
  )
}

export default Home
