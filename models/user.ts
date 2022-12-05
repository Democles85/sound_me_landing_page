import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  age: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  date: {
    type: String,
    required: false
  }
})

const User = models.User || model('User', UserSchema)

export default User
