const path = require('path')

const express = require('express')

const mainRouter = require('./routes/main')
const usersRouter = require('./routes/users')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use(mainRouter)
app.use(usersRouter)

app.listen(3000)