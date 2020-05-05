const seeder = require('mongoose-seed')
require('dotenv').config()

const data = require('./products.json')
seeder.connect(process.env.MONGO_URL + process.env.MONGO_DB, function () {
  seeder.loadModels(['api/models/helps.model.js'])
  seeder.clearModels(['helps'], function () {
    seeder.populateModels(data, function () {
      seeder.disconnect()
    })
  })
})