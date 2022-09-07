import sendgrid from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string)

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const { firstName, lastName, phone, email, address, education, profession } =
    req.body

  const message = {
    to: 'sixheitartari12@gmail.com',
    from: 'democleschannel28@gmail.com',
    subject: 'New Registration',
    html: `
    <div style="font-size: 16px;">
      <strong>First Name:</strong> ${firstName}<br />
      <strong>Last Name:</strong> ${lastName}<br />
      <strong>Phone:</strong>+355 ${phone}<br />
      <strong>Email:</strong> ${email}<br />
      <strong>Address:</strong> ${address}<br />
      <strong>Education:</strong> ${education}<br />
      <strong>Profession:</strong> ${profession}<br />
    </div>
    `
  }

  sendgrid
    .send(message)
    .then((response) => {
      res.status(200).json({ message: 'Email sent successfully' })
      console.log('Message sent successfuly')
    })
    .catch((error) => {
      res.status(400).json({ error: error.message })
      console.log('Message failed to send')
    })
}

export default sendEmail
