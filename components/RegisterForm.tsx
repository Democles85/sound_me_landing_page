import {
  AspectRatio,
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  List,
  ListItem,
  Text
} from '@chakra-ui/react'
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import ParagraphHeader from './ParagraphHeader'

const Asterisk = () => <span style={{ color: '#3e503c' }}>*</span>

export default function RegisterForm() {
  const emailFormat: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const phoneFormat: RegExp =
    /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [birthPlace, setBirthPlace] = useState('')
  const [education, setEducation] = useState('')
  const [profession, setProfession] = useState('')

  const [errors, setErrors] = useState({}) as any
  const [buttonText, setButtonText] = useState('Regjistrohu')

  const showSuccessToast = (): void => {
    toast.success('Ju u regjistruat me sukses!', {
      position: 'top-right',
      autoClose: 5000,
      style: {
        fontFamily: '"Noto Sans Balinese", sans-serif',
        background: '#3e503c',
        color: '#fff'
      }
    })
  }

  const showFillAllFieldsToast = (): void => {
    toast.warning('Ju lutem plotësoni të gjitha fushat!', {
      position: 'top-right',
      autoClose: 5000,
      style: {
        fontFamily: '"Noto Sans Balinese", sans-serif',
        background: '#3e503c',
        color: '#fff'
      }
    })
  }

  const showErrorsToast = (): void => {
    toast.error('Ju lutem plotësoni fushat e duhura!', {
      position: 'top-right',
      autoClose: 5000,
      style: {
        fontFamily: '"Noto Sans Balinese", sans-serif',
        background: '#3e503c',
        color: '#fff'
      }
    })
  }

  const showFailureToast = (): void => {
    toast.error('Ju nuk u regjistruat me sukses!', {
      position: 'top-right',
      autoClose: 5000,
      style: {
        fontFamily: '"Noto Sans Balinese", sans-serif',
        background: '#3e503c',
        color: '#fff'
      }
    })
  }

  const handleValidation = (): boolean => {
    let tempErrors: any = {}
    let isValid = true

    if (firstName.length === 0) {
      isValid = false
      tempErrors['firstName'] = true
    } else if (firstName.length > 20) {
      isValid = false
      tempErrors['longFirstName'] = true
    }

    if (lastName.length === 0) {
      isValid = false
      tempErrors['lastName'] = true
    } else if (lastName.length > 20) {
      isValid = false
      tempErrors['longLastName'] = true
    }

    if (phone.length === 0) {
      isValid = false
      tempErrors['phone'] = true
    } else if (!phoneFormat.test(phone)) {
      isValid = false
      tempErrors['phone'] = true
    }

    if (email.length === 0) {
      isValid = false
      tempErrors['email'] = true
    } else if (!email.match(emailFormat)) {
      isValid = false
      tempErrors['correctEmail'] = true
    }

    if (birthPlace.length === 0) {
      isValid = false
      tempErrors['birthPlace'] = true
    }

    if (education.length === 0) {
      isValid = false
      tempErrors['education'] = true
    }

    setErrors({ ...tempErrors })

    return isValid
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    let isValidForm = handleValidation()

    if (isValidForm === true) {
      setButtonText('Duke u regjistruar...')

      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          birthPlace,
          education,
          profession
        })
      })

      // console.table(
      //   JSON.stringify({
      //     firstName,
      //     lastName,
      //     phone,
      //     email,
      //     address,
      //     education,
      //     profession
      //   })
      // )

      const { error } = await res.json()

      if (error) {
        showFailureToast()
        setButtonText('Regjistrohu')

        setFirstName('')
        setLastName('')
        setPhone('')
        setEmail('')
        setBirthPlace('')
        setEducation('')
        setProfession('')

        return
      }

      showSuccessToast()
      setButtonText('Regjistrohu')

      setFirstName('')
      setLastName('')
      setPhone('')
      setEmail('')
      setBirthPlace('')
      setEducation('')
      setProfession('')

      return
    } else if (
      isValidForm === false &&
      ['correctEmail', 'correctPhone'].includes(Object.keys(errors)[0])
    ) {
      showErrorsToast()
      setButtonText('Regjistrohu')

      return
    }
    showFillAllFieldsToast()
    setButtonText('Regjistrohu')

    return
  }

  return (
    <Container
      maxW={{ base: 'container.sm', md: 'container.md', lg: 'container.lg' }}
      pb={'3rem'}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Box
            display={'flex'}
            flexDir={{ base: 'column', md: 'row', lg: 'row' }}
            w={'100%'}
          >
            <Box w={'inherit'} px={5} py={{ base: 2, md: 0, lg: 0 }}>
              <FormLabel htmlFor={'firstName'}>
                Emri: <Asterisk />
              </FormLabel>
              <Input
                borderColor={'goblinGreen'}
                _hover={{ borderColor: 'oliveGreen' }}
                focusBorderColor={'goblinGreen'}
                placeholder={'John'}
                _placeholder={{ color: 'oliveGreen', opacity: 1 }}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                isInvalid={errors['firstName'] || errors['longFirstName']}
              />
              {errors['firstName'] ? (
                <FormHelperText color={'goblinGreen'}>
                  Ju lutem shkruani emrin tuaj.
                </FormHelperText>
              ) : errors['longFirstName'] ? (
                <FormHelperText color={'goblinGreen'}>
                  Emri juaj nuk mund të jetë më i gjatë se 20 karaktere.
                </FormHelperText>
              ) : null}
            </Box>
            <Box w={'inherit'} px={5} py={{ base: 2, md: 0, lg: 0 }}>
              <FormLabel htmlFor={'lastName'}>
                Mbiemri: <Asterisk />
              </FormLabel>
              <Input
                borderColor={'goblinGreen'}
                _hover={{ borderColor: 'oliveGreen' }}
                focusBorderColor={'goblinGreen'}
                placeholder={'Doe'}
                _placeholder={{ color: 'oliveGreen', opacity: 1 }}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                isInvalid={errors['lastName'] || errors['longLastName']}
              />
              {errors['lastName'] ? (
                <FormHelperText color={'goblinGreen'}>
                  Ju lutem shkruani mbiemrin tuaj.
                </FormHelperText>
              ) : errors['longLastName'] ? (
                <FormHelperText color={'goblinGreen'}>
                  Mbiemri juaj nuk mund të jetë më i gjatë se 20 karaktere.
                </FormHelperText>
              ) : null}
            </Box>
          </Box>
          <Box w={'100%'} display={'flex'} flexDir={'column'}>
            <Box w={'inherit'} px={5} pt={2}>
              <FormLabel htmlFor={'email'}>
                Numër telefoni: <Asterisk />
              </FormLabel>
              <InputGroup>
                <InputLeftAddon
                  border={'1px'}
                  borderColor={'goblinGreen'}
                  _hover={{ borderColor: 'oliveGreen' }}
                  bg={'oliveGreen'}
                  fontFamily={'Montserrat'}
                  color={'goblinGreen'}
                >
                  +355
                </InputLeftAddon>
                <Input
                  borderColor={'goblinGreen'}
                  _hover={{ borderColor: 'oliveGreen' }}
                  focusBorderColor={'goblinGreen'}
                  placeholder={'069 123 4567'}
                  _placeholder={{ color: 'oliveGreen', opacity: 1 }}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  isInvalid={errors['phone']}
                />
              </InputGroup>
              {errors['phone'] && (
                <FormHelperText color={'goblinGreen'}>
                  Ju lutem shkruani numrin tuaj telefoni.
                </FormHelperText>
              )}
              {errors['correctPhone'] && (
                <FormHelperText color={'goblinGreen'}>
                  Ju lutem shkruani numrin tuaj telefoni në formatin e duhur.
                </FormHelperText>
              )}
            </Box>
            <Box w={'inherit'} px={5} pt={2}>
              <FormLabel htmlFor={'email'}>
                Email: <Asterisk />
              </FormLabel>
              <Input
                borderColor={'goblinGreen'}
                _hover={{ borderColor: 'oliveGreen' }}
                focusBorderColor={'goblinGreen'}
                placeholder={'johndoe@gmail.com'}
                _placeholder={{ color: 'oliveGreen', opacity: 1 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={errors['email']}
              />
              {errors['email'] && (
                <FormHelperText color={'goblinGreen'}>
                  Ju lutem shkruani emailin tuaj.
                </FormHelperText>
              )}
              {errors['correctEmail'] && (
                <FormHelperText color={'goblinGreen'}>
                  Ju lutem shkruani emailin tuaj në formatin e duhur.
                </FormHelperText>
              )}
            </Box>
            <Box w={'inherit'} px={5} pt={2}>
              <FormLabel htmlFor={'vendlindja'}>
                Vendlindja: <Asterisk />
              </FormLabel>
              <Input
                borderColor={'goblinGreen'}
                _hover={{ borderColor: 'oliveGreen' }}
                focusBorderColor={'goblinGreen'}
                placeholder={'Tiranë'}
                _placeholder={{ color: 'oliveGreen', opacity: 1 }}
                value={birthPlace}
                onChange={(e) => setBirthPlace(e.target.value)}
                isInvalid={errors['birthPlace']}
              />
              {errors['birthPlace'] && (
                <FormHelperText color={'goblinGreen'}>
                  Ju lutem shkruani vendlindjen tuaj.
                </FormHelperText>
              )}
            </Box>
            <Box w={'inherit'} px={5} pt={2}>
              <FormLabel htmlFor={'arsimimi'}>
                Arsimimi: <Asterisk />
              </FormLabel>
              <Input
                borderColor={'goblinGreen'}
                _hover={{ borderColor: 'oliveGreen' }}
                focusBorderColor={'goblinGreen'}
                placeholder={'Master i Inxhinierisë Elektrike'}
                _placeholder={{ color: 'oliveGreen', opacity: 1 }}
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                isInvalid={errors['education']}
              />
              {errors['education'] && (
                <FormHelperText color={'goblinGreen'}>
                  Ju lutem shkruani arsimimin tuaj.
                </FormHelperText>
              )}
            </Box>
            <Box w={'inherit'} px={5} pt={2}>
              <FormLabel htmlFor={'profesioni'}>
                Profesioni{' '}
                <span style={{ verticalAlign: 'sub', fontSize: '10px' }}>
                  (opsionale)
                </span>
                :
              </FormLabel>
              <Input
                borderColor={'goblinGreen'}
                _hover={{ borderColor: 'oliveGreen' }}
                focusBorderColor={'goblinGreen'}
                placeholder={'Inxhinier Elektrik'}
                _placeholder={{ color: 'oliveGreen', opacity: 1 }}
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
              />
            </Box>
            <Box
              w={'inherit'}
              px={5}
              pt={'1.5rem'}
              display={'flex'}
              justifyContent={'center'}
            >
              <Button
                bg={'oliveGreen'}
                color={'goblinGreen'}
                _hover={{ bg: 'goblinGreen', color: '#fff' }}
                _focus={{ boxShadow: 'none' }}
                w={{ base: '60%', md: '50%', lg: '40%' }}
                type={'submit'}
              >
                {buttonText}
              </Button>
            </Box>
          </Box>
        </FormControl>
      </form>

      {/* Ku mund te na gjeni */}
      <Box pt={5}>
        <ParagraphHeader>Ku mund të na gjeni:</ParagraphHeader>
      </Box>
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

      {/* Kontakti */}
      <Box pt={5}>
        <ParagraphHeader>Kontakti:</ParagraphHeader>

        <Box
          display={'flex'}
          flexDir={{ base: 'column', md: 'row', lg: 'row' }}
        >
          <Box px={{ base: 0, md: 2, lg: 4 }} py={{ base: 2, md: 0, lg: 0 }}>
            <a href="https://www.instagram.com/soundmeyouth/" target="__blank">
              <Button
                bg={'rgba(143, 152, 125, 0.3)'}
                color={'goblinGreen'}
                _hover={{ bg: 'oliveGreen', color: '#fff' }}
                _focus={{ boxShadow: 'none' }}
              >
                <Box display={'flex'}>
                  <Box pr={1}>
                    <Icon as={AiOutlineInstagram} />
                  </Box>
                  <Box>
                    <Text>@soundmeyouth</Text>
                  </Box>
                </Box>
              </Button>
            </a>
          </Box>

          <Box px={{ base: 0, md: 2, lg: 4 }} py={{ base: 2, md: 0, lg: 0 }}>
            <a
              href="https://www.facebook.com/Sound-Me-110440398473173/?ref=page_internal"
              target="__blank"
            >
              <Button
                bg={'rgba(143, 152, 125, 0.3)'}
                color={'goblinGreen'}
                _hover={{ bg: 'oliveGreen', color: '#fff' }}
                _focus={{ boxShadow: 'none' }}
              >
                <Box display={'flex'}>
                  <Box pr={1}>
                    <Icon as={AiOutlineFacebook} />
                  </Box>
                  <Box>
                    <Text>@soundme</Text>
                  </Box>
                </Box>
              </Button>
            </a>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
