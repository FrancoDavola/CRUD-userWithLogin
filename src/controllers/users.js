const express = require('express')
const userService = require('../services/userService')
const Success = require('../handlers/successHandler')


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const getAllUsers = async (req, res , next) =>  {
    try{
        const users =  await userService.findAll(req.query.filter , req.query.params)
        res.json( new Success(users))
    
    }catch(err){
        next(err)
    }

   
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

 const getById = async (req, res, next ) => {

    try {
        const user = await userService.findById(req.params.id)     
        res.json(new Success(user))

    }catch(err){
        next(err)
    }

    
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const createUser = async (req, res , next) => {

    try{
        const user = req.body  
        const userCreate = await userService.save(user);

        res.json(new Success(userCreate))

    }catch(err){
        next(err)
    }
    
}


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const updateUser = async (req, res, next) => {

    try{
        const { id } = req.params;
        let user = req.body;

        const userUpdate = await userService.update(id, user);

        res.json(new Success(userUpdate))

    }catch(err){
        next(err)
    }

    
}


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

    const deleteUser = async (req, res, next) => {

        try{
            const {id} = req.params
            const user = await userService.remove(id)
        
            res.json(new Success(user))
        }catch(err){
            next(err)
        }

    
}


module.exports = {
    getAllUsers,
    getById,
    createUser,
    updateUser,
    deleteUser
}