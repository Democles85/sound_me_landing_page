import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import {
  ContactUs,
  FindUs,
  Paragraph,
  ParagraphHeader,
  RegisterForm
} from '../components'

const Home: NextPage = () => {
  return (
    <Box>
      <Box pb={5}>
        <ParagraphHeader>Kush jemi?</ParagraphHeader>
        <Paragraph>
          SoundMe është i përbërë prej disa profesionistësh në fushën e
          terapive. Ata kanë background në Psikologji, Parapsikologji, Bodywork,
          Breathwork, Sound Healing etj.
        </Paragraph>
      </Box>
      <Box pb={5}>
        <ParagraphHeader>Synimi ynë?</ParagraphHeader>
        <Paragraph>
          Të përmirësojmë shëndetin dhe mirëqenien, nëpërmjet vetëreflektimit
          dhe terapive, si dhe të ndërtojmë një komunitet të terapive të
          ndryshme në Shqipëri, dedikuar të rinjve.
        </Paragraph>
      </Box>

      <Box pt={5}>
        <ParagraphHeader>Regjistrohu:</ParagraphHeader>
        <RegisterForm />
        <FindUs />
        <ContactUs />
      </Box>
    </Box>
  )
}

export default Home
