/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input
} from '@chakra-ui/react'
// React Toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// React
import { useEffect, useMemo, useState } from 'react'
// ATCB
import { atcb_init } from 'add-to-calendar-button'
import 'add-to-calendar-button/assets/css/atcb.css'
import { Select, OptionBase } from 'chakra-react-select'

const Asterisk = () => <span style={{ color: '#3e503c' }}>*</span>

interface DateOptions extends OptionBase {
  label: string
  value: string
}

export default function RegisterForm() {
  const emailFormat: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState<number>()
  const [date, setDate] = useState<DateOptions[]>([])
  const [email, setEmail] = useState('')

  // console.log(date.map((d) => d.label))

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

    if (age === undefined) {
      isValid = false
      tempErrors['age'] = true
    } else if (age < 18 || age > 29) {
      isValid = false
      tempErrors['invalidAge'] = true
    }

    if (email.length === 0) {
      isValid = false
      tempErrors['email'] = true
    } else if (!email.match(emailFormat)) {
      isValid = false
      tempErrors['correctEmail'] = true
    }

    if (date.length === 0) {
      isValid = false
      tempErrors['date'] = true
    }

    setErrors({ ...tempErrors })

    return isValid
  }

  const dateHandler = (e: any) => {
    setDate(e)
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
          age,
          date,
          email
        })
      })

      const db_res = await fetch('/api/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName,
          lastName,
          age,
          date,
          email
        })
      })

      const { error } = await res.json()

      if (error) {
        showFailureToast()
        setButtonText('Regjistrohu')

        setFirstName('')
        setLastName('')
        setAge(undefined)
        setDate([])
        setEmail('')

        return
      }

      showSuccessToast()
      setButtonText('Regjistrohu')

      setFirstName('')
      setLastName('')
      setAge(undefined)
      setDate([])
      setEmail('')

      return
    } else if (
      isValidForm === false &&
      ['correctEmail'].includes(Object.keys(errors)[0])
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
      pb={'1rem'}
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
                placeholder={'Sound'}
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
                placeholder={'Me'}
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
                Email: <Asterisk />
              </FormLabel>
              <Input
                borderColor={'goblinGreen'}
                _hover={{ borderColor: 'oliveGreen' }}
                focusBorderColor={'goblinGreen'}
                placeholder={'soundme@gmail.com'}
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
              <FormLabel htmlFor={'age'}>
                Mosha: <Asterisk />
              </FormLabel>
              <Input
                borderColor={'goblinGreen'}
                _hover={{ borderColor: 'oliveGreen' }}
                focusBorderColor={'goblinGreen'}
                placeholder={'20'}
                _placeholder={{ color: 'oliveGreen', opacity: 1 }}
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                isInvalid={errors['age'] || errors['invalidAge']}
              />
              {errors['age'] ? (
                <FormHelperText color={'goblinGreen'}>
                  Ju lutem shkruani moshen tuaj.
                </FormHelperText>
              ) : errors['invalidAge'] ? (
                <FormHelperText color={'goblinGreen'}>
                  Mosha juaj nuk mund të jetë më e vogël se 15 dhe më e madhe se
                  29.
                </FormHelperText>
              ) : null}
            </Box>

            <Box w={'inherit'} px={5} pt={2}>
              <FormLabel htmlFor={'age'}>
                Data: <Asterisk />
              </FormLabel>
              <Select<DateOptions, true>
                isMulti
                options={[
                  {
                    label: '8 December 2022',
                    value: '08-12-2022'
                  },
                  {
                    label: '10 December 2022',
                    value: '10-12-2022'
                  },
                  {
                    label: '11 December 2022',
                    value: '11-12-2022'
                  },
                  {
                    label: '17 December 2022',
                    value: '17-12-2022'
                  },
                  {
                    label: '18 December 2022',
                    value: '18-12-2022'
                  }
                ]}
                isInvalid={errors['date']}
                focusBorderColor={'goblinGreen'}
                id={'date'}
                placeholder={'Zgjidhni datën / datat'}
                selectedOptionColor={'goblinGreen'}
                value={date}
                onChange={(e) => dateHandler(e)}
                chakraStyles={{
                  dropdownIndicator: (
                    prev,
                    { selectProps: { menuIsOpen } }
                  ) => ({
                    ...prev,
                    '> svg': {
                      transitionDuration: 'normal',
                      transform: `rotate(${menuIsOpen ? 180 : 0}deg)`
                    }
                  }),
                  option: (prev, { isFocused }) => ({
                    ...prev,
                    backgroundColor: isFocused ? 'goblinGreen' : 'marbleWhite',
                    color: isFocused ? '#ffffff' : undefined
                  }),
                  menu: (prev) => ({
                    ...prev,
                    background: 'marbleWhite',
                    color: '#3e503c',
                    border: '1px solid #3e503c',
                    borderRadius: 'lg',
                    boxShadow: 'none',
                    outline: 'none'
                  }),
                  menuList: (prev) => ({
                    ...prev,
                    padding: 0
                  }),
                  control: (prev, { isFocused }) => ({
                    ...prev,
                    borderColor: isFocused ? 'oliveGreen' : 'goblinGreen',
                    boxShadow: 'none',
                    '&:hover': {
                      borderColor: isFocused ? 'goblinGreen' : 'oliveGreen'
                    }
                  }),
                  placeholder: (prev) => ({
                    ...prev,
                    color: 'oliveGreen'
                  }),
                  singleValue: (prev) => ({
                    ...prev,
                    color: 'oliveGreen'
                  })
                }}
              />
              <FormHelperText color={'goblinGreen'} fontStyle={'italic'}>
                Ju mund të zgjidhni më shumë se një datë.
              </FormHelperText>
              {errors['date'] && (
                <FormHelperText color={'goblinGreen'}>
                  Ju lutem zgjidhni datën.
                </FormHelperText>
              )}
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
            {/* <Box className={'atcb'}>
              {'{'}
              "name":"Add the title of your event", "description":"A nice
              description does not hurt", "startDate":"2022-02-21",
              "endDate":"2022-03-24", "startTime":"10:13", "endTime":"17:57",
              "location":"Somewhere over the rainbow", "label":"Add to
              Calendar", "options":[ "Apple", "Google", "iCal", "Microsoft365",
              "Outlook.com", "Yahoo" ], "timeZone":"Europe/Berlin",
              "iCalFileName":"Reminder-Event"
              {'}'}
            </Box> */}
          </Box>
        </FormControl>
      </form>
    </Container>
  )
}
