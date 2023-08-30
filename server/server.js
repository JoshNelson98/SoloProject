const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

const MONGODB_URI = 'mongodb+srv://jnelson:nelson@cluster0.mdgvr5h.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
const {Schema} = mongoose
 const itemSchema = new Schema({
    name: String,
    description: String,
  });
  
  const Item = mongoose.model('Item', itemSchema);
  

  

const app = express();


const PORT = 3000;

app.use(express.json())

// app.use(express.static(path.resolve(__dirname, '../dist')))

app.get('/', (req, res) => {
    console.log('josh')
    res.sendFile(path.join(__dirname, '../react/index.html'));
  })


app.get('/api', (req, res) => {
    console.log('hi')
    res.send('hiiiiiii')
})

app.listen(PORT);

module.exports = app;
