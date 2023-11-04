import sendgrid from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string)

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const { firstName, lastName, age, phoneNumber, email } = req.body

  const messages = [
    {
      to: 'soundme01@gmail.com',
      from: 'democleschannel28@gmail.com',
      subject: 'New Registration',
      html: `
    <div style="font-size: 16px;">
      <strong>First Name:</strong> ${firstName}<br />
      <strong>Last Name:</strong> ${lastName}<br />
      <strong>Age: </strong> ${age}<br />
      <strong>Phone Number: </strong> +355 ${phoneNumber}<br />
      <strong>Email:</strong> ${email}<br />
    </div>
    `
    },
    {
      to: 'colomboresonate@gmail.com',
      from: 'democleschannel28@gmail.com',
      subject: 'New Registration',
      html: `
    <div style="font-size: 16px;">
      <strong>First Name:</strong> ${firstName}<br />
      <strong>Last Name:</strong> ${lastName}<br />
      <strong>Age: </strong> ${age}<br />
      <strong>Phone Number: </strong> +355 ${phoneNumber}<br />
      <strong>Email:</strong> ${email}<br />
    </div>
    `
    },
    {
      to: email,
      from: 'soundme01@gmail.com',
      subject: 'Faleminderit për regjistrimin',
      html: `
    <div style="font-size: 20px;">
      <strong>Të dhënat tuaja</strong><br />
    </div>
    <div style="font-size: 16px;">
      <strong>First Name:</strong> ${firstName}<br />
      <strong>Last Name:</strong> ${lastName}<br />
      <strong>Age: </strong> ${age}<br />
      <strong>Phone Number: </strong> +355 ${phoneNumber}<br />
      <strong>Email:</strong> ${email}<br />
    </div>
    `
    }
  ]

  sendgrid
    .send(messages)
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
