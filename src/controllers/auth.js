const express = require('express')
const authService = require('../services/authService')
const Success = require('../handlers/successHandler')


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const login = async (req, res , next) => {

    const {email , password} = req.body
    try{
        const userAuthentication = await authService.login(email , password)

        res.json(new Success(userAuthentication))
    }catch(err){
        next(err)
    }
    
}



   
module.exports = {
    login
}