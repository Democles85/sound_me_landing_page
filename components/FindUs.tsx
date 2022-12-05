import { AspectRatio, Box } from '@chakra-ui/react'
import ParagraphHeader from './ParagraphHeader'

export default function WhereToFindU() {
  return (
    <Box py={5}>
      <ParagraphHeader>Ku mund të na gjeni:</ParagraphHeader>

      <AspectRatio ratio={16 / 9}>
        <Box as={AspectRatio}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7847.974572361454!2d19.801914971668996!3d41.31282538659457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350311acac54717%3A0x229354e0af650838!2sVeste%20Collection!5e0!3m2!1sen!2s!4v1670257327832!5m2!1sen!2s"
            width={'100%'}
            height={'600'}
            allowFullScreen={true}
            loading="lazy"
            style={{ border: '2px solid #3e503c', borderRadius: '10px' }}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </AspectRatio>
    </Box>
  )
}
