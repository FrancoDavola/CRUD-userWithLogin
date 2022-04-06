const {Router} = require('express')
const {login} = require('../controllers/auth')
const {postLoginValidations} = require('../middlewares/auth')

const router = Router()

router.post('/' , postLoginValidations, login)

module.exports = router