const UserModel = require('../models/users.model')
const { handleError } = require('../utils')

module.exports = {
  getHelps,
  createHelp,
  getHelpById,
  updateHelpById,
  deleteHelpById
}

function getMyProfile (req, res) {
  const userId = res.locals.user._id
  UserModel
    .findById(userId)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function updateMyProfile (req, res) {
  const userId = res.locals.user._id
  UserModel
    .findByIdAndUpdate(userId, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteMyProfile (req, res) {
  const userId = res.locals.user._id
  UserModel
    .remove({ _id: userId})
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

