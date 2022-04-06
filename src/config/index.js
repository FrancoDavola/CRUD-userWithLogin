const dotenv = require('dotenv')

const envFound = dotenv.config()
if(!envFound) {
    throw new Error('No se encontro el .env')
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
    port : process.env.PORT,
    api : {
        prefix : 'api/v1/'
    },
    log : process.env.LOG_LEVEL,
    swagger : {
        path : '/documentation'
    },
    dataBaseURL : process.env.DATABASE_URL,
    auth : {
        secret : process.env.AUTH_SECRET,
        ttl: process.env.AUTH_TTL
    }
}