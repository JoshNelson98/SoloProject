const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const putController = require('./PutController.js')
const Item = require('../Model/Model.js')

// const MONGODB_URI = 'mongodb+srv://jnelson:nelson@cluster0.mdgvr5h.mongodb.net/?retryWrites=true&w=majority'

// mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
// const {Schema} = mongoose
//  const itemSchema = new Schema({
//     name: String,
//     description: String,
//   });

// const Item = mongoose.model('Item', itemSchema);

// Item.create( {
//     name: 'Orlando',
//     description: 'rainy'
// })

// Item.create({
//     name: 'Charleston',
//     description: 'Sunny'
// })





const app = express();


const PORT = 3000;

app.use(express.json())

// app.use(express.static(path.resolve(__dirname, '../dist')))
app.post('/addWeather', (req, res) => {
    Item.create( {
        name: `${req.body.name}`,
        description: `${req.body.description}`
    })
    
    // Item.create({
    //     name: 'SanFransisco',
    //     description: 'Sunny'
    // })
    res.send({hello: 'hi'})
})


app.get('/', (req, res) => {
    console.log('josh')
    res.sendFile(path.join(__dirname, '../react/index.html'));
  })


app.get('/api/:id', async (req, res) => {
    console.log('hi')
    console.log(req.params.id)
    res.send(await Item.find({name: req.params.id}))
})

app.put('/api', putController.putController, async(req, res) => {
    console.log('this did put')
    res.send
})

app.listen(PORT);

module.exports = app;
