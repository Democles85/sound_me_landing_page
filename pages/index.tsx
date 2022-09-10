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
      <Box>
        <ParagraphHeader>Cilët jemi?</ParagraphHeader>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          quaerat aut dolor quasi perferendis maiores illum, explicabo est omnis
          a natus placeat, tempore iusto rem sed aperiam cumque beatae sunt.
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
