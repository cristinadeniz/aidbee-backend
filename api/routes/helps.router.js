const router = require('express').Router()

const {
  getHelps,
  getOtherUserHelps,
  createHelp,
  getHelpById,
  updateHelpById,
  deleteHelpById
} = require('../controllers/helps.controller')

router.get('/', getHelps)
router.get('/others', getOtherUserHelps)
router.get('/:id', getHelpById)
router.post('/', createHelp)
router.put('/:id', updateHelpById)
router.delete('/:id', deleteHelpById)

module.exports = router
