'use strict'

const express = require('express')
const path = require('path')


const app = express()

if (process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'production') {
  app.use(require('volleyball'))
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../public')))

app.use('/api', require('./api')) // include our routes!

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.use((err, req, res, next) => {
  // console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

module.exports = app
