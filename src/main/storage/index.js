const DataStore = require('nedb')
let clients = new DataStore({ filename: './clients.db', autoload: true })

export { clients }