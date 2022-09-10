import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  birthPlace: {
    type: String,
    required: true
  },
  education: {
    type: String,
    required: true
  },
  profession: {
    type: String,
    required: false
  }
})

const User = models.User || model('User', UserSchema)

export default User
