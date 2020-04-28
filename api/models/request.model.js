const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  message: {
    type: String, 
    required: true
  }, 
  status: {
    type: String,
    enum: ['requested', 'accepted', 'done', 'rejected']
  },
  help: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'help'
  },
  user: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'user'
  }
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel