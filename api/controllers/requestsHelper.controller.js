// const HelpModel = require('../models/request.model')
// const { handleError } = require('../utils')

// module.exports = {
//   getAllMyHelpRequests,
//   createHelpRequests,
//   RemoveHelpRequests
// }

// // function getAllMyHelpRequests(req, res) {
// //   HelpModel
// //     .find()
// //     .then(request => res.json(request))
// //     .catch((err) => handleError(err, res))
// // }


// function createHelpRequests(req, res) {
//   HelpModel
//   .create(req.body)
//   .then((request) => {
//     res.json(request)
//   })
//   .catch((err) => handleError(err, res))
// }

// // function getAllListsByUser(req, res) {
// //   const userId = req.params.id
// //   FavouriteList.find({ owner: userId })
// //     .populate('songs')
// //     .then(lists => {
// //       res.json(lists)
// //     })
// //     .catch(err => console.log(err))
// // }

