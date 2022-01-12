const dotenv = require('dotenv')
require('dotenv').config();
// Load config
dotenv.config({ path: './config/config.env' })

//exports the keys
module.exports = {
    appKey : process.env.appKey,
    appSecret : process.env.appSecret,
    accessToken : process.env.accessToken,
    accessSecret : process.env.accessSecret
}