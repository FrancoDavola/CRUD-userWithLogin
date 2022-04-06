const {check} = require('express-validator')
const {validationResult} = require('../commons')
const AppError = require('../../errors/appError')
const userService = require('../../services/userService')
const ROLES = require('../../../constants')

const _nameRequired = check('name' , 'Name is required').not().isEmpty()
const _lastnameRequired = check('lastname' , 'Last Name is required').not().isEmpty()
const _emailRequired = check('email' , 'Email is required').not().isEmpty()
const _emailValid = check('email' , 'Email is Ivalid').isEmail()
const _emailExist = check('email').custom(
    async (email = '') => {
        const userFound = await userService.findByEmail(email)
        if(userFound){
            throw new AppError('Email alredy exist in DB' , 400)
        }
    }
)

const _passwordRequired = check('password' , 'Password is required').not().isEmpty()
const _roleValid = check('role').optional().custom(
    async (role = '') => {
        if(!ROLES.includes(role)){
            throw new AppError('Ivalid role' , 400)
        }
    }
)

const _dateValid = check('birthdate').optional().isDate('MM-DD-YYYY')
const _emailOptionalValid = check('email' , 'Email is Ivalid').optional().isEmail()
const _emailOptionalExist = check('email').optional().custom(
    async (email = '') => {
        const userFound = await userService.findByEmail(email)
        if(userFound){
            throw new AppError('Email alredy exist in DB' , 400)
        }
    }
)

const idRequired = check('id').not().isEmpty()
const idIsMongoDB = check('id').isMongoId()
const _idExist = check('id').custom(
    async (id = '') => {
        const userFound = await userService.findById(id)
        if(!userFound){
            throw new AppError('The id does not in DB' , 400)
        }
    }
)






const postRequestValidations = [
    _nameRequired,
    _lastnameRequired,
    _emailRequired,
    _emailValid,
    _emailExist,
    _passwordRequired,
    _roleValid,
    _dateValid,
    validationResult
]

const putRequestValidations = [
    _emailOptionalValid,
    _emailOptionalExist,
    idRequired,
    idIsMongoDB,
    _idExist,
    _roleValid,
    _dateValid,
    validationResult

]

module.exports = {
    postRequestValidations,
    putRequestValidations
}