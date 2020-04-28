const mongoose = require('mongoose')

const helpSchema = new mongoose.Schema({
  help_type: {
    type: String,
    enum: ['health', 'food', 'other']
  },
  address: {
    type: String,
    required: [true, 'telephone is required']
  },
  request_title: {
    type: String,
    required: [true, 'telephone is required']
  },
  additional_info: {
    type: String
  },
  is_done: {
    type: Boolean,
    default: false
  },
  created_at: {
    type: Date,
    default: Date.now() // Get a timestamp :)
  },
  requester: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'user'
  },
  helper: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'user'
  },
})

const helpModel = mongoose.model('help', helpSchema)
module.exports = helpModel