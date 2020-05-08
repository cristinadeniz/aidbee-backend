const RequestModel = require('../models/request.model')
const { handleError } = require('../utils')

module.exports = {
  seeAllHelpRequestForAHelp,
  acceptAHelpRequest,
  refuseHelpRequest,
  markAHelpRequestAsCompleted
}

function seeAllHelpRequestForAHelp (req, res) {
  RequestModel
    .find({ helper: { $ne: res.locals.user._id } })
    .populate({
      path: 'help',
      populate: {
        path: 'requester'
      }
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function acceptAHelpRequest (req, res) {
  RequestModel
    .findOneAndUpdate({ _id: req.params.id }, { status: 'accepted' }, {
      new: true,
      runValidators: true
    })
    .then(request => res.json(request))
    .catch((err) => handleError(err, res))
}

function refuseHelpRequest (req, res) {
  RequestModel
    .findOneAndUpdate({ _id: req.params.id }, { status: 'rejected' }, {
      new: true,
      runValidators: true
    })
    .then(request => res.json(request))
    .catch((err) => handleError(err, res))
}

function markAHelpRequestAsCompleted (req, res) {
  RequestModel
    .findOneAndUpdate({ _id: req.params.id }, { status: 'done' }, {
      new: true,
      runValidators: true
    })
    .then(request => res.json(request))
    .catch((err) => handleError(err, res))
}
