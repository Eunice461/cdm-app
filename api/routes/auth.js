const express = require('express')
const router = express.Router()

const { register, login, logout } = require('../controllers/auth')

router.route('/register', register);
router.route('/login', login);
router.route('/logout', logout)

module.exports = router

