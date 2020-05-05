const router = require('express').Router()

const {
  getHelps,
  createHelp,
  getAllMyHelpRequests,
  getHelpById,
  updateHelpById,
  deleteHelpById
} = require('../controllers/helps.controller')

router.get('/', getHelps)
router.post('/', createHelp)
router.get('/requests', getAllMyHelpRequests)
router.get('/:id', getHelpById)
router.put('/:id', updateHelpById)
router.delete('/:id', deleteHelpById)

module.exports = router
