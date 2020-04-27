const mongoose = require('mongoose')

const helpSchema = new mongoose.Schema({
  type: {
    type: String, 
    enum: ['Health', 'Food', 'Other']
  },
  userAskingForHelp: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'user'
  },
  helper: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'user'
  },
  address: {
    type: String,
    required: [true, 'telephone is required']
  },
  requestTitle: {
    type: String,
    required: [true, 'telephone is required']
  },
  additionalInfo: {
    type: String
  },
  createdAt: {
    type: Number,
    default: Date.now() // Get a timestamp :)
  }
})

const helpModel = mongoose.model('help', helpSchema)
module.exports = helpModel