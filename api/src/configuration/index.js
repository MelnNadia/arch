const port = process.env.PORT || 3001
const host = process.env.HOST || 'localhost'
const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/api'
module.exports = {port, host, mongoURL}