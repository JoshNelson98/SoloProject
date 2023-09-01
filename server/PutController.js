const Item = require('../Model/Model.js')
// let fetch;
// import('node-fetch').then((fetch) => fetch = fetch)
const fetch = require('node-fetch');




const putObj = {}

putObj.putController = async (req, res, next) => {
console.log(req.body.name)
console.log(req.body.description)
await Item.updateMany({name:`${req.body.name}` }, {description: req.body.description})
next()
}

putObj.apiController = async(req, res, next) => {
    let city = req.params.id
    console.log(city)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=95845ab2cb00e2699f750fda3bd9bf3f`)
    const data = await response.json()
    res.locals.weather = data
    next()
}

module.exports = putObj