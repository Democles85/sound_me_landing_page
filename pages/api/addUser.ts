import connectMongoDB from '../../util/connectMongoDB'
import User from '../../models/user'
import { NextApiRequest, NextApiResponse } from 'next'

async function addUser(req: NextApiRequest, res: NextApiResponse) {
  const { firstName, lastName, phone, email, address, education, profession } =
    req.body

  await connectMongoDB()

  const user = await User.create({
    firstName,
    lastName,
    phone,
    email,
    address,
    education,
    profession
  })

  res.status(200).json({ message: 'User created successfully' })
}
