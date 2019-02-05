const express = require('express')

const app = express()

app.use((req, res, next) =>{
  console.log('first middleware')
  next()
})

app.use('/users', (req, res, next) => {
  res.send('<h1>Users</h1>')
})

app.use((req, res, next) =>{
  console.log('second middleware')
  res.send('<h1>Hello from Express.js</h1>')
})

app.listen(3000)