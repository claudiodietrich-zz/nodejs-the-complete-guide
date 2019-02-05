const path = require('path')

const router = require('express').Router()

router.get('/users', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'users.html'))
})

module.exports = router