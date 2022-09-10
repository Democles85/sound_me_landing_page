import { AspectRatio, Box } from '@chakra-ui/react'
import ParagraphHeader from './ParagraphHeader'

export default function WhereToFindU() {
  return (
    <Box py={5}>
      <ParagraphHeader>Ku mund të na gjeni:</ParagraphHeader>

      <AspectRatio ratio={16 / 9}>
        <Box as={AspectRatio}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.56417734895!2d19.8157647!3d41.3183438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135031eb76d1122d%3A0x44de4b3c6e138878!2sSound%20Me!5e0!3m2!1sen!2s!4v1662815397384!5m2!1sen!2s"
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
