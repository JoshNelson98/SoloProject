const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
// const putController = require('./PutController.js')

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

module.exports = Item;