const express = require('express')
const wikiRouter = express.Router()
const addPage = require('../views/addPage')

wikiRouter.get('/', (req,res,next) => {
  res.redirect('/wiki')
})

wikiRouter.post('/',(req,res,next) => {
  res.send('You hit the POST route for /wiki')
})

wikiRouter.get('/add', (req,res,next) => {
  res.send(addPage())
})

module.exports = wikiRouter