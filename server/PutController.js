const Item = require('../Model/Model.js')

const putObj = {}

putObj.putController = async (req, res, next) => {
console.log(req.body.name)
console.log(req.body.description)
await Item.updateMany({name:`${req.body.name}` }, {description: req.body.description})
next()
}

module.exports = putObj