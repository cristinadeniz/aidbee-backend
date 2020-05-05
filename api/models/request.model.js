const mongoose = require('mongoose')

const requestSchema = new mongoose.Schema({
  message: {
    type: String, 
    required: true
  }, 
  status: {
    type: String,
    enum: ['requested', 'accepted', 'done', 'rejected'],
    default: 'requested'
  },
  help: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'help'
  },
  helper: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
})

const requestModel = mongoose.model('request', requestSchema)
module.exports = requestModel