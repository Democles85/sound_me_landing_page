import { z } from 'zod'

export const schema = z.object({
  firstName: z
    .string()
    .min(1, 'Ju lutem vendosni emrin tuaj')
    .max(20, 'Emri nuk mund të jetë më i gjatë se 20 karaktere'),
  lastName: z
    .string()
    .min(1, 'Ju lutem vendosni mbiemrin tuaj')
    .max(20, 'Mbiemri nuk mund të jetë më i gjatë se 20 karaktere'),
  phoneNumber: z
    .string()
    .regex(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Ju lutem vendosni një numër të saktë telefoni'
    ),
  age: z.number().min(18, 'Ju duhet të jeni të paktën 18 vjeç'),
  email: z
    .string()
    .regex(
      /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm,
      'JJu lutem vendosni një adresë të saktë email-iu'
    )
    .email('Ju lutem vendosni një adresë email-i')
})
