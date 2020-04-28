const router = require('express').Router()

const authRouter = require('./auth.router')
const usersRouter = require('./users.router')
const helpRouter = require('./helps.router')
//const requestsRouter = require('./requests.router')
const { authUser } = require('../utils') // Authenticated Route

router.use('/auth', authRouter)
router.use('/me', authUser, usersRouter)
router.use('/me/helps', helpRouter)
//router.use('/me/helps/:id/requests', requestsRouter)


router.get('/whoami', authUser, (req, res) => {
  res.send(`hi there! ${res.locals.user.name}`)
})

module.exports = router
