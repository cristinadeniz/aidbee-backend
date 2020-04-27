const router = require('express').Router()

const {
  getMyProfile,
  updateMyProfile,
  deleteMyProfile
} = require('../controllers/users.controller')

router.get('/me', getMyProfile)
router.put('/me', updateMyProfile)
router.delete('/me', deleteMyProfile)

module.exports = router
