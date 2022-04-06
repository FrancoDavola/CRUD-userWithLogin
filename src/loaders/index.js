const ExpressServer = require('./server/expressServer')
const mongooseLoader = require('./mongoose')
const config = require('../config')
const logger = require('./logger')
const { mongo } = require('./mongoose')

module.exports = async () => {

    await mongooseLoader()

    const server = new ExpressServer()
    server.start()
    logger.info('DB loaded and connected')
    logger.info(`######################################
      Server listening on port ${config.port}
      ######################################`)
    
}