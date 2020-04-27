const router = require('express').Router()

const authRouter = require('./auth.router')
const usersRouter = require('./users.router')
//const helpRouter = require('./help.router')
const { authUser } = require('../utils') // Authenticated Route

router.use('/auth', authRouter)
router.use('/users', authUser, usersRouter)
//router.use('/help', helpRouter)


router.get('/whoami', authUser, (req, res) => {
  res.send(`hi there! ${res.locals.user.name}`)
})

module.exports = router
