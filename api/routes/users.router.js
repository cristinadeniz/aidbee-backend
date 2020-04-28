const router = require('express').Router()

const {
  getMyProfile,
  updateMyProfile,
  deleteMyProfile
} = require('../controllers/users.controller')

router.get('/', getMyProfile)
router.put('/', updateMyProfile)
router.delete('/', deleteMyProfile)

module.exports = router
