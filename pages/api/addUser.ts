import connectMongoDB from '../../util/connectMongoDB'
import User from '../../models/user'
import { NextApiRequest, NextApiResponse } from 'next'

async function addUser(req: NextApiRequest, res: NextApiResponse) {
  const { firstName, lastName, age, phoneNumber, date, time, email } = req.body

  await connectMongoDB()

  const user = await User.create({
    firstName,
    lastName,
    age,
    phoneNumber,
    date,
    time,
    email
  })

  res.status(200).json({ message: 'User created successfully' })
}

export default addUser
