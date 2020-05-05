const router = require('express').Router()

const {
  seeAllHelpRequestForAHelp,
  acceptAHelpRequest,
  refuseHelpRequest,
  markAHelpRequestAsCompleted
} = require('../controllers/request.controller')

router.get('/', seeAllHelpRequestForAHelp)
router.put('/:id/accept', acceptAHelpRequest)
router.put('/:id/refuse', refuseHelpRequest)
router.put('/:id/done', markAHelpRequestAsCompleted)

module.exports = router
