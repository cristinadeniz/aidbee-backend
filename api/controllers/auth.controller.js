const UserModel = require('../models/users.model')
const { handleError } = require('../utils')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
  signup,
  login
}

function signup(req, res) {
  const hashedPwd = bcrypt.hashSync(req.body.password, 10)
  const userBody = {
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: hashedPwd,
    telephone: req.body.telephone
  }
  UserModel.create(userBody)
    .then(() => {
      const userData = {
        name: req.body.name,
        email: req.body.email
      }
      const token = jwt.sign(
        userData,
        process.env.SECRET,
        { expiresIn: '1w' }
      )
      return res.json({ token: token, ...userData })
    })
    .catch(err => {
      res.status(403).json({ error: err })
    })
}

function login(req, res) {
  console.log(req.body);
  UserModel.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.json({ error: 'wrong email' })
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) { return handleError(err, res) }
        if (!result) {
          return res.json({
            error: `wrong password for ${req.body.email}`
          })
        } else {
          const userData = { name: user.name, email: user.email }
          const token = jwt.sign(
            userData,
            process.env.SECRET,
            { expiresIn: '1h' }
          )
          return res.json({ token: token, ...userData })
        }
      })
    })
    .catch(err => handleError(err, res))
}