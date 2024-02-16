// const express = require('express')
import express from 'express'
import {PORT, HOST} from './config.js'

const app = express()

app.get('/', (req, res) => {
  res.json({mensage:'Hello World!'})
})

app.post('/', (req, res) => {
  res.json({mensage:'Hello World! post'})
})

app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`)
})
