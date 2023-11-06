import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { schema } from '../models/form-schema/register-form-schema'

const Asterisk = () => <span style={{ color: '#3e503c' }}>*</span>

export default function RegisterForm() {
  const [buttonText, setButtonText] = useState('Regjistrohu')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control
  } = useForm({ resolver: zodResolver(schema) })

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

  const onSubmit = async (data: any) => {
    setButtonText('Duke u regjistruar...')
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    const { error } = await res.json()

    if (error) {
      showFailureToast()
      setButtonText('Regjistrohu')
      reset()
      return
    }

    showSuccessToast()
    setButtonText('Regjistrohu')
    reset()
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.firstName}>
          <FormLabel>
            Emri <Asterisk />
          </FormLabel>
          <Input
            type="text"
            borderColor={'goblinGreen'}
            _hover={{ borderColor: 'oliveGreen' }}
            focusBorderColor={'goblinGreen'}
            {...register('firstName')}
          />
          <FormHelperText>
            {errors.firstName?.message && (
              <p>{`${errors.firstName?.message}`}</p>
            )}
          </FormHelperText>
        </FormControl>

        <FormControl isInvalid={!!errors.lastName}>
          <FormLabel>
            Mbiemri <Asterisk />
          </FormLabel>
          <Input
            type="text"
            borderColor={'goblinGreen'}
            _hover={{ borderColor: 'oliveGreen' }}
            focusBorderColor={'goblinGreen'}
            {...register('lastName')}
          />
          <FormHelperText>
            {errors.lastName?.message && <p>{`${errors.lastName?.message}`}</p>}
          </FormHelperText>
        </FormControl>

        <FormControl isInvalid={!!errors.phoneNumber}>
          <FormLabel>Numri Telefonit</FormLabel>
          <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            render={({ field }: { field: any }) => (
              <InputGroup>
                <InputLeftAddon
                  borderColor={'goblinGreen'}
                  background={'rgba(143, 156, 125, 0.5)'}
                >
                  +355
                </InputLeftAddon>
                <Input
                  {...field}
                  type="text"
                  as={InputMask}
                  mask={'***-***-****'}
                  maskChar={null}
                  placeholder={'06X-123-4567'}
                  borderColor={'goblinGreen'}
                  _hover={{ borderColor: 'oliveGreen' }}
                  focusBorderColor={'goblinGreen'}
                />
              </InputGroup>
            )}
          />
          <FormHelperText>
            {errors.phoneNumber?.message && (
              <p>{`${errors.phoneNumber?.message}`}</p>
            )}
          </FormHelperText>
        </FormControl>

        <FormControl isInvalid={!!errors.age}>
          <FormLabel>Mosha</FormLabel>
          <Input
            type="number"
            placeholder={'18'}
            borderColor={'goblinGreen'}
            _hover={{ borderColor: 'oliveGreen' }}
            focusBorderColor={'goblinGreen'}
            {...register('age', { valueAsNumber: true })}
          />
          <FormHelperText>
            {errors.age?.message && <p>{`${errors.age?.message}`}</p>}
          </FormHelperText>
        </FormControl>

        <FormControl isInvalid={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            borderColor={'goblinGreen'}
            _hover={{ borderColor: 'oliveGreen' }}
            focusBorderColor={'goblinGreen'}
            {...register('email')}
          />
          <FormHelperText>
            {errors.email?.message && <p>{`${errors.email?.message}`}</p>}
          </FormHelperText>
        </FormControl>

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
      </form>
    </Container>
  )
}
