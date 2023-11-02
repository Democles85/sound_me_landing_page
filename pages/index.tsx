import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import type { NextPage } from 'next'
import {
  ContactUs,
  Events,
  FindUs,
  Paragraph,
  ParagraphHeader,
  RegisterForm
} from '../components'

const Home: NextPage = () => {
  return (
    <Box>
      <Box pb={'2rem'}>
        <ParagraphHeader>Kush jemi?</ParagraphHeader>
        <Paragraph>
          Sound Me është themeluar nga Pëllumb Mukaj ~Colombo, si një hapësirë
          autentike ku të gjithë të rijntë të suportohen dhe mbështeten në
          rrugetimin e tyre.
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

      <Box pb={'2rem'}>
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
