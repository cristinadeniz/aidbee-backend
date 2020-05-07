const RequestModel = require('../models/request.model')
const { handleError } = require('../utils')

module.exports = {
  getAllMyHelpRequests,
  createHelpRequests,
  removeHelpRequest
}

function getAllMyHelpRequests (req, res) {
  RequestModel
    .find({ helper: { $eq: res.locals.user._id } })
    .populate('help')
    .then(request => res.json(request))
    .catch((err) => handleError(err, res))
}

function createHelpRequests (req, res) {
  const object = {
    help: req.params.id,
    helper: res.locals.user,
    message: req.body.message
  }
  RequestModel
    .create(object)
    .then((response) => {
      res.json(response)
    })
    .catch((err) => handleError(err, res))
}

function removeHelpRequest (req, res) {
  RequestModel
    .remove({ _id: req.params.id })
    .then(requests => res.json(requests))
    .catch(err => handleError(err, res))
}
