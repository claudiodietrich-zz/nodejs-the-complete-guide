const router = require('express').Router()

const users = ['a', 'b']

router.post('/users', (req, res, next) => {
  users.push(req.body.name)
  res.render('users', { users })
})

module.exports = router
