const express = require('express')
const bodyParser = require('body-parser')

const server = express()

server.use(function (err, req, res, next) {
  console.error(err.stack)
  res.send(500, 'Something broke!')
})

server.use(bodyParser.json())
server.use(express.static('public'))

server.listen(3000, function () { console.log('Server is up and running') })
