const router = require('express').Router()

const {
  getAllMyHelpRequests,
  createHelpRequests,
  removeHelpRequest
} = require('../controllers/requestsHelper.controller')

router.get('/', getAllMyHelpRequests)
router.post('/:id/requests', createHelpRequests)
router.delete('/:helpId/requests/:id', removeHelpRequest)

module.exports = router
