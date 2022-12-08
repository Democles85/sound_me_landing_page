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
  phoneNumber: {
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
    type: Object,
    required: false
  }
})

const User = models.User || model('User', UserSchema)

export default User
