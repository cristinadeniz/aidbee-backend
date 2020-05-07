const mongoose = require('mongoose')

const requestSchema = new mongoose.Schema({
  message: {
    type: String
  },
  status: {
    type: String,
    enum: ['requested', 'accepted', 'done', 'rejected'],
    default: 'requested'
  },
  helper: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  help: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'help'
  }
})

const requestModel = mongoose.model('request', requestSchema)
module.exports = requestModel
