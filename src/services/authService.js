const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const userService = require('../services/userService')
const AppError = require('../errors/appError')
const config = require('../config')
const res = require('express/lib/response')

const login = async (email , password) => {

    try{
        const user = await userService.findByEmail(email)

        if(!user){
            throw new AppError('Authentication failed! Email / password does not correct.', 401)
        }

        if(!user.enable){
            throw new AppError('User is disable for login' , 400)
        }

        const validPassword = await bcrypt.compare(password, user.password)

        if(!validPassword){
            throw new AppError('Authentication failed! Email / password does not correct. --- pass' , 400)
        }

        

       const token =  _bcrypt(user._id)

       return {
           token,
           name : user.name,
           role : user.role
       }


    }catch(err){
        throw err
    }

}

_bcrypt = (id) => {
   return jwt.sign({id}, config.auth.secret, { expiresIn: config.auth.ttl});
}

module.exports = {
    login
}