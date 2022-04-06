const {Router} = require('express')
const router = Router()
const {getAllUsers , createUser , updateUser, getById , deleteUser} = require('../controllers/users')
const {postRequestValidations , putRequestValidations} = require('../middlewares/users') 

router.get('/', getAllUsers)

router.post('/', postRequestValidations, createUser)

router.put('/:id', putRequestValidations, updateUser)

router.get('/:id', getById)

router.delete('/:id' , deleteUser)

module.exports = router