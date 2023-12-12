const express = require('express')
const mysql = require('mysql')

const app = express()
app.use((request, response, next) => {
  next()
})
app.use(express.json())
const db = mysql.createConnection({ host: '', port: 3306 })

app.delete('/', (request, response) => {
  response.send('this is a DELETE route')
})

app.get('/', (request, response) => {
  response.send('welcome to my express app')
})

app.post('/', (request, response) => {
  response.send('this is a test POST route')
})

app.put('/', (request, response) => {
  response.send('this is a test PUT route')
})

app.listen(4000, '0.0.0.0', () => {
  console.log('server started on port 4000')
})
