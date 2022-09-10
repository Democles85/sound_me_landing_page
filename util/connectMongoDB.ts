import mongoose from 'mongoose'

const MONGO_URL = process.env.MONGO_URL as string

if (!MONGO_URL) {
  throw new Error(
    'Please define the MONGO_URL environment variable inside .env.local'
  )
}

const options: any = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const connectMongoDB = async () => {
  try {
    mongoose.connect(MONGO_URL, options)
    console.log('MongoDB connected')
  } catch (error) {
    console.log(error)
  }
}

export default connectMongoDB
