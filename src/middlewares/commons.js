const {validationResult} = require('express-validator')
const AppError = require('../errors/appError')


const validResults = (req, res , next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        throw new AppError('Validation Error' , 400 , errors.errors)
    }
    next()
}

module.exports = {
    validationResult : validResults
}