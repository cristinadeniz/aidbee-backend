const mongoose = require('mongoose')

const helpSchema = new mongoose.Schema({
  help_type: {
    type: String,
    enum: ['health', 'food', 'other']
  },
  address: {
    type: String,
    required: [true, 'address is required']
  },
  request_title: {
    type: String,
    required: [true, 'request_title is required']
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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  helper: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
})

const helpModel = mongoose.model('help', helpSchema)
module.exports = helpModel