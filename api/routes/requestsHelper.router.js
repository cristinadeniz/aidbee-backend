 const router = require('express').Router()

 const {
   createHelpRequests,
   removeHelpRequest,
 } = require('../controllers/requestsHelper.controller')

router.post('/:id/requests/', createHelpRequests)
router.delete('/requests/:id', removeHelpRequest)

 module.exports = router
